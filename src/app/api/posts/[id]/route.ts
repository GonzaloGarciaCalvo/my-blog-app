import Error from "next/error";
import { prisma } from "../../../libs/prisma";
import { NextResponse } from "next/server";


export async function GET( request: Request,
  { params }: { params: { id: string } })  {
    try {
    /* console.log("param.id: ", params.id); */
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });
    if (!post){
      console.log("POST: ", post)
      return NextResponse.json({ message: "post not found!!" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error: any) {
      return NextResponse.json(
        {
          message: "ERROR DE CATCH: " + error.message,
        },
        {
          status: 500,
        }
      );
  }
}

export async function PUT( request: Request,
  { params }: { params: { id: string } })  {
    try {
    /* console.log("param.id: ", params.id); */
    const { title, description, image, video  } = await request.json();

    const updatedPost = await prisma.post.update({
      where: {
        id:Number(params.id),
      },
      data: {
        title,
        description,
        image,
        video
      },
    });
    if (!updatedPost){
      console.log("updatedPost: ", updatedPost)
      return NextResponse.json({ message: "Post not found!!" }, { status: 404 });
    }
    return NextResponse.json(updatedPost);
  } catch (error: any) {
      return NextResponse.json(
        {
          message: "ERROR DE CATCH: " + error.message,
        },
        {
          status: 500,
        }
      );
  }
}

export async function DELETE( request: Request,
  { params }: { params: { id: string } })  {
    try {
    console.log("param.id: ", params.id);
    //const { title, description, image, video  } = await request.json();

    const deletePost = await prisma.post.delete({
      where: {
        id:Number(params.id),
      }
    });
    if (!deletePost){
      console.log("deletePost: ", deletePost)
      return NextResponse.json({ message: "Post not found!!" }, { status: 404 });
    }
    return NextResponse.json(deletePost);
  } catch (error: any) {
      return NextResponse.json(
        {
          message: "ERROR DE CATCH: " + error.message,
        },
        {
          status: 500,
        }
      );
  }
}