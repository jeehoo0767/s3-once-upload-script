const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "./image_name.png"));
const fileName = "image_name.png";

const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "access_key_id",
  secretAccessKey: "secret_access_key",
});

const uploadImage = (file, fileName, directory) => {
  const params = {
    Bucket: "bucket_name",
    Key: `${directory}/assets/images/${fileName}`,
    Body: file,
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
};

const uploadAll = (file, fileName) => {
  const directories = ["dev", "staging", "prod"]; // Add top level path of the s3 bucket

  const uploads = directories.map((directory) => {
    return uploadImage(file, fileName, directory);
  });

  Promise.all(uploads)
    .then((data) => {
      console.log("Successfully uploaded images to S3: ", data);
    })
    .catch((err) => {
      console.log("Error uploading images: ", err);
    });
};

uploadAll(file, fileName);
