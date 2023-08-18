import React, { useState, useEffect } from 'react';
const url = 'http://localhost:5000/emotion'

const WebcamVideo = () => {
  const [emotionData, setEmotionData] = useState([]);
  const [stream, setStream] = useState(null); 

  useEffect(() => {
    // Start capturing video frames and sending them to the server
    const captureFramesAndSend = async () => {
      const videoElement = document.getElementById('videoStream');
      const canvasElement = document.createElement('canvas');
      const canvasContext = canvasElement.getContext('2d');

      try {
        const constraints = { video: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = stream;

        const sendFramesToServer = async () => {
          // Capture a frame from the video stream and draw it on the canvas
          canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
          const frameBlob = await new Promise(resolve => canvasElement.toBlob(resolve, 'image/jpeg'));

          // Send the frame as a blob to the server
          const formData = new FormData();
          formData.append('frames', frameBlob);

          try {
            const response = await fetch(url, {
              method: 'POST',
              body: formData,
            });

            const data = await response.json();
            setEmotionData(data);

          } catch (error) {
            console.error('Error processing emotion:', error);
          }

          // Schedule the next frame capture and send
          requestAnimationFrame(sendFramesToServer);
        };

        // Start sending frames to the server
        sendFramesToServer();
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    captureFramesAndSend();
  }, [stream]);

  const handleStopStream = () => {
    // Stop the video stream when the stop button is clicked
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
    }
  };

  return (
    <div>
      <div >
        <video id="videoStream" width="560" height="500" autoPlay playsInline />
      </div>
      <div >
        <h2>Emotion Results</h2>
        <ul>
          {emotionData.map((data, index) => (
            <li key={index}>
              Frame {index + 1}: {data.emotion} (Probability: {data.probability ? data.probability.toFixed(2) : 'N/A'})
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleStopStream}>Stop Streaming</button>
    </div>
  );
};

export default WebcamVideo;