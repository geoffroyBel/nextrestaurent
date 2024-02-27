"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useEffect } from "react";

export function RedirectCustom() {
  const router = useRouter();
  const session = useSession();
  let authContent;
  useEffect(() => {
    console.log("----------");

    if (!router || !session || !session?.data) return;
    if (!session.data.user.isAdmin) {
      router.push("/");
    }
  }, [session, router]);
  return <>gg</>;
}
