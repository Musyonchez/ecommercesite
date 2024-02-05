//upload-image.tsx


import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  message: string;
  imageUrl?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let uploadResult: AWS.S3.ManagedUpload.SendData | undefined;
  let params: {
    Bucket: string;
    Key: string;
    Body: any;
    ContentType: any;
    ACL: string;
  } = {
    Bucket: process.env.AWS_S3_BUCKET_NAME || 'stocksyncbuucket', // Replace with your AWS S3 bucket name
    Key: '', // Initialize with an empty string
    Body: null,
    ContentType: '',
    ACL: 'public-read', // Adjust permissions as needed
  };

  try {
    console.log('Request Body:', body);
    const { image } = req.body;

    // Initialize AWS SDK
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const s3 = new AWS.S3();

    // Generate a unique filename using uuid
    const filename = `${uuidv4()}-${image.name}`;

    // Set up parameters for S3 upload
    params.Key = `images/${filename}`;
    params.Body = image.data;
    params.ContentType = image.type;

    console.log('S3 Upload Parameters:', params);

    // Upload image to S3
    uploadResult = await s3.upload(params).promise();

    console.log('S3 Upload Result:', uploadResult);

    const responseData: Data = {
      message: 'Image uploaded successfully',
      imageUrl: uploadResult.Location,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error uploading image:', error);
    console.log('S3 Upload Parameters:', params);
    console.log('S3 Upload Result:', uploadResult);
    res.status(500).json({ message: 'Internal Server Error', error: ((error as Error).message || 'Unknown error') as string } as Data);
}
}
