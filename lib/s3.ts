import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";

const s3Client = new S3Client({ region: process.env.AWS_S3_BUCKET_REGION });

export const bucketParams = {
  Bucket: process.env.AWS_S3_BUCKET_NAME,
  Key: "OBJECT_NAME",
  Body: "BODY",
};

export async function uploadFile(file: Blob, path: string) {
  try {
    const data = await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: path,
        Body: file,
      })
    );

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);

    return err;
  }
}

export async function uploadCoverImage(file: Blob) {
  try {
    const id = uuid();

    return uploadFile(file, `cover-image/image-${id}`);
  } catch (err) {
    console.log(err);

    return err;
  }
}
