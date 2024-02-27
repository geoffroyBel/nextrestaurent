import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  //to validation
  try {
    const ingredient = await db.ingrediant.create({ data: { name } });
    return NextResponse.json(
      { message: "Ingradient added", data: ingredient },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { name } = await req.json();
  //to validation
  try {
    const ingredients = await db.ingrediant.findMany();
    return NextResponse.json(
      { message: "List all ingredients", data: ingredients },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
