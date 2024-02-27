import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
import * as jwt from "jose";
import { JWTPayload } from "jose";
const secretKey = "votre_clé_secrète";

export const config = { matcher: ["/api/recipies/", "/api/recipies/:path*"] };
export async function verify(
  token: string,
  secret: string
): Promise<JWTPayload> {
  const { payload } = await jwt.jwtVerify(
    token,
    new TextEncoder().encode(secret)
  );

  return payload;
}
export async function middleware(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
  const decoded = await verify(token, secretKey);
  console.log(decoded);
}
