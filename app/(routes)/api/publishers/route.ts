import {prisma} from "@/libs/prisma";
import {NextRequest, NextResponse} from "next/server";
import {Prisma} from "@prisma/client";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams
  const searchKey = url.get('search_key') || ''

  const publishers =
    await prisma.publisher.findMany({
      where: { name: { contains: searchKey, mode: 'insensitive' }},
      include: { games: true }
    })

  return NextResponse.json(publishers)
}

export const POST = async (req: NextRequest) => {
  const { name } = await req.json()

  try {
    const publisher = await prisma.publisher.create({ data: { name } })

    return NextResponse.json(publisher)
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return NextResponse.json(
          { message: `Publisher with name ${name} already exist.`},
          { status: 400 }
        )
      }
    }
  }
}
