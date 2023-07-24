import cv2
from deepface import DeepFace

# Use 0 for the default webcam
video_capture = cv2.VideoCapture(0)

# Use the open-source haar_cascade classifier.
# TODO: use an alternative classifier
haar_cascade = cv2.CascadeClassifier('../classifier/haar_face.xml')

while True:
    # Read a frame from the webcam
    ret, frame = video_capture.read()

    # Convert video stream to gray
    gray_video = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the gray video frame
    faces = haar_cascade.detectMultiScale(gray_video, 1.1, 4)

    # Loop through the detected faces and construct facial rectangles
    for (x, y, w, h) in faces:
        # Draw a rectangle around each detected face
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 3)

    # Analyze the frame using DeepFace
    result = DeepFace.analyze(img_path="../assets/faces.jpg", actions=['emotion'], enforce_detection=False)

    emotion = result[0]['dominant_emotion']
    txt = str(emotion)

    cv2.putText(frame, txt, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    # Display the frame with emotion
    cv2.imshow('Frame', frame)

    if cv2.waitKey(1) & 0xff == ord('q'):  # Exit if 'q' is pressed
        break

video_capture.release()
cv2.destroyAllWindows() 
