import {prisma} from "@/libs/prisma";
import {NextResponse} from "next/server";

export const GET = async () => {
  const games =
    await prisma.game.findMany(
      { include: { publisher: { select: { name: true }}}}
    )
  return NextResponse.json(games)
}