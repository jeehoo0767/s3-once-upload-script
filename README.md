# How to use
1. Package install
```shell
npm init

npm instamm --save aws-sdk
```
2. Add your aws accessKeyId and secretAccessKey
```javascript
const s3 = new AWS.S3({
  accessKeyId: "access_key_id",
  secretAccessKey: "secret_access_key",
});
```

3. Save the image in root directory and write the image name in code
```javascript
const file = fs.readFileSync(path.join(__dirname, "./wtite image name"));
const fileName = "write image name";
```

4. Add the s3 bucket name and write directory in code
```javascript
const params = {
    Bucket: "write bucket name",
    Key: `${directory}/assets/images/${fileName}`,
    Body: file,
  };

// the code in uploadAll function
const directories = ["dev", "staging", "prod"]; // Add top level path of the s3 bucket
```

5. run script
```shell
node index.js
```