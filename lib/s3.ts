import * as AWS from "aws-sdk";
import { v4 as uuid } from "uuid";

// AWS SDK Configuration
AWS.config.update({
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_REGION,
  signatureVersion: "v4",
});

// New S3 Instance
const s3 = new AWS.S3({ signatureVersion: "v4" });

export async function uploadFile(file: Blob, path: string) {
  try {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: path,
      Body: file,
    };

    s3.upload(params, (err, result) => {
      if (err) {
        console.log("Error", err);

        return err;
      } else {
        return result;
      }
    });
  } catch (err) {
    console.log(err);

    return err;
  }
}

export async function uploadCoverImage(file: Blob) {
  try {
    console.log(file);
    const id = uuid();

    return uploadFile(file, `cover-images/image-${id}`);
  } catch (err) {
    console.log(err);

    return err;
  }
}
