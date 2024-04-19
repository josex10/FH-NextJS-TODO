import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Play Soccer 1", complete: true },
      { description: "Play Soccer 2" },
      { description: "Play Soccer 3" },
      { description: "Play Soccer 4" },
      { description: "Play Soccer 5" },
      { description: "Play Soccer 6" },
      { description: "Play Soccer 7" },
    ],
  });

  return NextResponse.json({
    message: "seed executed",
  });
}
