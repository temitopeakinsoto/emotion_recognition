import cv2
from deepface import DeepFace
from mtcnn.mtcnn import MTCNN

# Use 0 for the default webcam
video_capture = cv2.VideoCapture(0)  

# Use the MTCNN face detector
face_detector = MTCNN()

# Number of consecutive frames to capture for micro-emotion analysis
num_frames_to_capture = 5
captured_frames = []

while True:
    # Read a frame from the webcam
    ret, frame = video_capture.read()  

    # Resize the frame to 1/4 of its original size
    height, width = frame.shape[:2]
    new_width = int(width * 0.5)
    new_height = int(height * 0.5)
    resized_frame = cv2.resize(frame, (new_width, new_height))

    # Convert video stream to gray
    gray_video = cv2.cvtColor(resized_frame, cv2.COLOR_BGR2GRAY)

    # Detect faces using MTCNN
    faces = face_detector.detect_faces(resized_frame)
    for face in faces:
        x, y, w, h = face['box']
        cv2.rectangle(resized_frame, (x, y), (x + w, y + h), (255, 0, 0), 3)

    # Get the dominant emotion and its probability
    if len(captured_frames) < num_frames_to_capture:
        captured_frames.append(resized_frame)

    if len(captured_frames) == num_frames_to_capture:
        # Analyze captured frames using DeepFace
        emotions = []
        for frame in captured_frames:
            result = DeepFace.analyze(img_path=frame, actions=['emotion'], enforce_detection=False)
            if result:
                emotion = result[0]['dominant_emotion']
                probability = result[0]['emotion'][emotion]
                emotions.append((emotion, probability))

        if emotions:
            # Get the most frequent emotion and its average probability
            emotion_count = {}
            for emotion, probability in emotions:
                emotion_count[emotion] = emotion_count.get(emotion, 0) + 1

            most_frequent_emotion = max(emotion_count, key=emotion_count.get)
            average_probability = sum(probability for _, probability in emotions) / len(emotions)

            txt = f"{most_frequent_emotion} (Average Probability: {average_probability:.2f})"
            print('EMOTIONS ARE: =', txt)

            cv2.putText(resized_frame, txt, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 3)

        # Clear captured frames for the next set of micro-emotion analysis
        captured_frames = []

    # Display the frame with emotion 
    cv2.imshow('Resized Frame', resized_frame)  
    
    if cv2.waitKey(1) & 0xff == ord('q'):  # Exit if 'q' is pressed
        break

video_capture.release()
cv2.destroyAllWindows()
