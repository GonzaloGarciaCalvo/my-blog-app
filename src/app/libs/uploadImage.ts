
import { v2 as cloudinary } from 'cloudinary';
//import { cloudinaryConfig } from "@/app/libs/cloudinaryConfig";



// Configuration
export const cloudinaryConfig =  { 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDIRARY_API_KEY, 
  api_secret: process.env. CLOUDINARY_API_SECRET,
  secure: true
};
cloudinary.config(cloudinaryConfig);
console.log("config: ", cloudinary.config())
export const uploadImage = async (imagePath:string | null | undefined) => {

  // Use the uploaded file's name as the asset's public ID and 
  // allow overwriting the asset with new versions
  if( !imagePath) {return "error"}
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};