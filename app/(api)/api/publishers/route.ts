import {prisma} from "@/libs/prisma";
import {NextRequest, NextResponse} from "next/server";

export const GET = async () => {
  const publishers =
    await prisma.publisher.findMany(
      { include: { games: true }}
    )
  return NextResponse.json(publishers)
}