import {prisma} from "@/libs/prisma";
import {NextRequest, NextResponse} from "next/server";

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
