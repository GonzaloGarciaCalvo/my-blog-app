import { NextResponse } from "next/server"
import {prisma} from "../../libs/prisma"
import {post} from "../../../types"


//Get all posts
export async function GET() {
  try{
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)

  } catch(error:any) {
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

//Create 1 post
export async function POST(request:Request) {
  try {
    const {title, description, image, video} = await request.json()
    const newTask = await prisma.post.create({
      data: {
        title,
        description,
        image,
        video
      }
    })
    console.log("newPost en POST: ", newTask)
    return NextResponse.json(newTask)
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


