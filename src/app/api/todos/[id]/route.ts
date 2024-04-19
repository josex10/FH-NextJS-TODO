import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id);

  if (!todo)
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });

  return NextResponse.json({
    todo,
  });
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
});
export async function PUT(request: Request, { params }: Segments) {

  const actualTodo = await getTodo(params.id);

  if (!actualTodo)
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });

  const { description, complete } = await putSchema.validate(
    await request.json()
  );
  const todo = await prisma.todo.update({ where: { id: params.id }, data: {description, complete} });

  return NextResponse.json({
    todo,
  });
}

const getTodo = async(id: string): Promise<Todo | null> => {
  return await prisma.todo.findFirst({ where: { id } });
}


