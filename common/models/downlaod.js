const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Replace with your desired local file path
const localFilePath = path.join(__dirname, "downloaded_image.jpg");

async function downloadImage(url, filePath) {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Pipe the response data to a file
    response.data.pipe(fs.createWriteStream(filePath));

    return new Promise((resolve, reject) => {
      response.data.on("end", () => {
        resolve();
      });

      response.data.on("error", (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error("Error downloading the image:", error);
    throw error;
  }
}

downloadImage(
  "https://drive.google.com/open?id=101vztnGq0vHOy7I1YUQeqxuxQgD1AMTF&export=download",
  localFilePath
)
  .then(() => {
    console.log("Image downloaded successfully!");
  })
  .catch((error) => {
    console.error("Failed to download image:", error);
  });
