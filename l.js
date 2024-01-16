
window.onload = function() {
    // Replace 'your_image_url.jpg' with the actual URL of your image
    var imageUrl = 'http://tacocam.tacoma.uw.edu/mjpg/video.mjpg?streamprofile=Balanced&timestamp=1616085147093';

    // Create a new img element
    var imageElement = new Image();

    // Set the 'src' attribute of the img element
    imageElement.src = imageUrl;

    // Append the img element to the body
    document.body.appendChild(imageElement);
};
