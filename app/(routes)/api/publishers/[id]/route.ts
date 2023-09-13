import {prisma} from "@/libs/prisma";
import {NextRequest, NextResponse} from "next/server";
import {Prisma} from "@prisma/client";
import {useParams} from "next/navigation";

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).href
  const urlArr = url.split('/')
  const id = Number(urlArr.pop())

  try {
    const publisher = await prisma.publisher.delete({
      where: { id }
    })

    return NextResponse.json(
      { message: `Successfully deleted publisher ${publisher.name}` }
    )
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2025') {
        return NextResponse.json(
          { message: `Publisher with id ${id} can\'t be found` },
          { status: 400 }
        )
      }
    }
    throw e
  }
}
