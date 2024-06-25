// Import required modules
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// URL of the image to fetch
const imageUrl = 'http://192.168.100.59/cam-lo.jpg';
// Path to save the image locally
const imagePath = path.join(__dirname, 'images', 'cam-hi.jpg'); // Assuming 'images' folder exists

async function fetchAndSaveImage() {
    try {
        // Fetch image data
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        // Save image locally
        fs.writeFileSync(imagePath, response.data);

        console.log('Image saved successfully.');

    } catch (error) {
        console.error('Error fetching or saving image:', error);
    }
}

// Periodically fetch and save the image (every 10 seconds)
setInterval(fetchAndSaveImage, 10000);

// Initial fetch and save
fetchAndSaveImage();
