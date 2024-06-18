import { NextResponse } from "next/server"
import {prisma} from "../../../libs/prisma"


export async function GET( request: Request,
  { params }: { params: { id: string } })  {
    try {
    //console.log("param.id: ", params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!user){
      console.log("user: ", user)
      return NextResponse.json({ message: "user not found!!" }, { status: 404 });
    }

    return NextResponse.json(user);
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