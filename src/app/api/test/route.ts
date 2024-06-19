import { prisma } from "@/app/libs/prisma"
import { uploadImage } from "@/app/libs/uploadImage"
import { NextResponse } from "next/server"


export async function POST(request:Request) {
  try {
    //const {title, description, image, video} = await request.json()
    const formData = await request.formData()
    //console.log("post en server: ", post)
    const image = formData.get("image") as File
    const title = formData.get("title")
    console.log("formData en server: ", formData)
    const url = formData.get("url")
    //console.log(url)
    console.log("image en back: ", image)
    if (image instanceof File) {
      uploadImage(image)
    } 
      
    
    //const {title,subTitle1,requirements1} = post
    //console.log("title: ", title, subTitle1, requirements1 ," formData: ", formData)
    /* title:"",
    subTitle1: "",
    requirements1:[],
    subTitle2: "",
    requirements2:[] */
    /* const newTask = await prisma.post.create({
      data: {
        title,
        description,
        image,
        video
      }
    }) */
    //console.log("newPost en POST: ", newTask)
    //return NextResponse.json("LLEGO EL POST")
    return NextResponse.json("LLEGO EL POST")
  } catch(error:any) {
    console.log("ERROR: ", error)
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
