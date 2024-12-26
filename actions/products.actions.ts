"use server"

import { S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'

const s3Client = new S3Client({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ""
	},
	region: "eu-north-1"
})

const formatDateForImage = () => {
  const now = new Date();

  const year = now.getFullYear(); // Year
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Month (0-11, so add 1 and pad with 0)
  const day = String(now.getDate()).padStart(2, "0"); // Day of the month
  const hours = String(now.getHours()).padStart(2, "0"); // Hours (24-hour format)
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Minutes
  const seconds = String(now.getSeconds()).padStart(2, "0"); // Seconds

  return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
};

export const getPresignedUrl = async () => {
  const imageName = `image-${formatDateForImage()}.png`;
  
  const { url, fields } = await createPresignedPost(s3Client, {
    Bucket: "decentralized-fiver",
    Key: `vastram/products/${imageName}`,
    Conditions: [
      ["content-length-range", 0, 5 * 1024 * 1024], // 5 MB max
    ],
    Expires: 3600,
  });

  return ({
    preSignedUrl: url,
    fields,
  });
}