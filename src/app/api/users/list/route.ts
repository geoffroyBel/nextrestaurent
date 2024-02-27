import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const result = await db.user.findMany();
  return NextResponse.json({ data: result });
}
