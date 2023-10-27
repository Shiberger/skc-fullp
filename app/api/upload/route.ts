import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// The code configures Cloudinary by setting the required parameters (cloud_name, api_key, and api_secret) 
// from environment variables (process.env). These credentials are necessary for authenticating with the Cloudinary service.
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

// The code defines an asynchronous function named POST, which handles incoming POST requests. In the context of this code, 
// POST requests are used for image uploads.
export async function POST(request: Request) {
    // Inside the POST function, it awaits the JSON data from the incoming request. 
    // This JSON object is expected to contain an "path" property, which is the file path or URL of the image to be uploaded.
    const { path } = await request.json();

    // It checks if the "path" property exists in the received JSON data. If it's missing, the function returns a JSON response with a 
    // "400 Bad Request" status code, indicating that the "Image path is required."
    if (!path) {
        return NextResponse.json({ message: "Image path is required" }, { status: 400 });
    }

    // If the "path" property is present, the code proceeds to attempt the image upload to Cloudinary. 
    // It specifies options for the upload, such as using the filename, allowing non-unique filenames, 
    // overwriting if the file already exists, and applying a transformation (resizing and cropping the image).
    try {
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [{ width: 1000, height: 752, crop: "scale" }],
        };

        // The cloudinary.uploader.upload method is used to upload the image to Cloudinary. 
        // It takes the "path" and options as parameters and returns the result of the upload.
        const result = await cloudinary.uploader.upload(path, options);

        // If the image upload is successful, the code constructs a JSON response with the upload result and a "200 OK" status code. 
        // This response includes information about the uploaded image, such as its URL on Cloudinary.
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        // If there is an error during the upload process, the code catches the error and constructs a JSON response with a 
        // "500 Internal Server Error" status code, indicating that the upload to Cloudinary failed.
        return NextResponse.json({ message: "Failed to upload image on Cloudinary" }, { status: 500 });
    }
}