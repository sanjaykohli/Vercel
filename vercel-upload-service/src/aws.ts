import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: "6d0dada60dfcf88fef92c59cd92ba921",
    secretAccessKey: "617b05f5e04bb10c8fd9ace040640b38941e973576d352e575fd5feb4b4f8876",
    endpoint: "https://2c655be6808691e6b74c9850fdfeb91a.r2.cloudflarestorage.com"
})

// fileName => output/12312/src/App.jsx
// filePath => /Users/harkiratsingh/vercel/dist/output/12312/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel",
        Key: fileName,
    }).promise();
    console.log(response);
}