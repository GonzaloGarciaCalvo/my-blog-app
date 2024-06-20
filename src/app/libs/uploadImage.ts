
import { v2 as cloudinary } from 'cloudinary';
//import { cloudinaryConfig } from "@/app/libs/cloudinaryConfig";



// Configuration
export const cloudinaryConfig =  { 
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_CLOUDIRARY_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true
};
cloudinary.config(cloudinaryConfig);
//console.log("config: ", cloudinary.config())
export const uploadImage = async (image:File| null) => {

  // Use the uploaded file's name as the asset's public ID and 
  // allow overwriting the asset with new versions
  if( !image) {return "error"}

  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
    // Upload the image
    const response = await new Promise((res, rej) => {
      cloudinary.uploader.
        upload_stream({}, (error, result) => {
        if (error) rej(error)
        res(result)
      }) 
      .end(buffer)
    });
    //console.log("response:: ", response)
    return response

};