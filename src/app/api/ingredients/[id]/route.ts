import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
type IIngredient = { params: { id: string } };
export async function DELETE(req: NextRequest, { params }: IIngredient) {
  const { id } = params;
  //to validation
  try {
    await db.ingrediant.delete({ where: { id: +id } });
    return NextResponse.json(
      { message: "Ingradient deleted", data: {} },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
