from flask import Flask, request, jsonify
import cv2
from deepface import DeepFace
import numpy as np
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
# Use 0 for the default webcam
video_capture = cv2.VideoCapture(0)

# Use the open-source haar_cascade classifier.
# TODO: use an alternative classifier to compare effectiveness
haar_cascade = cv2.CascadeClassifier('../classifier/haar_face.xml')

@app.route('/emotion', methods=['POST'])
def analyze_emotion():
    # Receive video frames from the frontend as a POST request
    frames = request.files.getlist('frames')
    emotions_data = []

    for frame in frames:
        # Convert the image file to an OpenCV BGR image
        nparr = np.fromstring(frame.read(), np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # Resize the frame to 1/4 of its original size
        height, width = frame.shape[:2]
        new_width = int(width * 0.5)
        new_height = int(height * 0.5)
        resized_frame = cv2.resize(frame, (new_width, new_height))

        result = DeepFace.analyze(img_path=resized_frame, actions=['emotion'], enforce_detection=False)

        # Convert video stream to gray
        gray_video = cv2.cvtColor(resized_frame, cv2.COLOR_BGR2GRAY)
        faces = haar_cascade.detectMultiScale(gray_video, 1.1, 4)

        # Loop through points numpy array in faces and construct a facial rectangle
        for (x, y, w, h) in faces:
            cv2.rectangle(resized_frame, (x, y), (x + w, y + h), (255, 0, 0), 3)

        # Extract dominant emotion and probability
        emotion = result[0]['dominant_emotion']
        probability = result[0]['emotion'][emotion]
        txt = f"{emotion} (Probability: {probability:.2f})"

        # Append emotion data to the list
        emotions_data.append({'frame': resized_frame.tolist(), 'emotion': emotion, 'probability': probability})

    return jsonify(emotions_data)
    #return "Hello"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)