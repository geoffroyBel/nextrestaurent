import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const result = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });
  return NextResponse.json({ data: result });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await req.json();
  const result = await prisma.user.update({
    where: {
      id: +id,
    },
    data,
  });
  return NextResponse.json({ data: result });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const result = await prisma.user.delete({
    where: {
      id: +id,
    },
  });
  return NextResponse.json({ data: result });
}
