"use client";
import { useSession } from "next-auth/react";
export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div> from client user: {JSON.stringify(session.data?.user)}</div>;
  }
  return <div> from client user Not refgisterin</div>;
}
