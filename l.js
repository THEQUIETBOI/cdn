<script>
    function loadImage() {
        // Replace 'YOUR_CDN_IMAGE_URL' with the actual CDN link to the image
        var cdnImageUrl = 'https://raw.githubusercontent.com/THEQUIETBOI/cdn/main/download.jpg';
        
        // Get the image container element
        var imageContainer = document.getElementById('imageContainer');
        
        // Set the source of the image
        imageContainer.src = cdnImageUrl;
        
        // Display the image
        imageContainer.style.display = 'block';
    }
</script>
