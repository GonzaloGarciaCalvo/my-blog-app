"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImgUploader = ({file}:any) => {
  const [image, setImage ] = useState<Blob | undefined>()
  const [ url, setUrl ] = useState("");

console.log("typeof file en ImgUploader: ", typeof file)
  useEffect( () => {
    if (typeof file === "object" ) {
      try {
        console.log("TRUE")
        let imgURL = URL?.createObjectURL(file) ?? ""
        setUrl(imgURL)
        console.log("imgUrl: ", imgURL) 
      } catch (error:any) {
        console.log("error: ", error.message)
      }
    }
    },[file])
  
console.log("debbuging")
  
console.log("url en ImgUp: ", url) /* const uploadImage = (e:any) => {
    e.preventDefault()
      
      if (image) {
          const formData = new FormData()
          formData.append('image', image)
        
      }
    } */
    return (
      <div className="w-28 h-28">
        {
          url
          ? <Image className="bg-white" src={url+'pingo'} width={200} height={200} alt="no carga img" />
          : null
        }
      </div>
    )
}
