import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold text-3xl" href={"/farms"}>
          Farm
        </Link>
        <div className="space-x-4 text-xl">
          <Link href={"/products"}>products</Link>
          <Link href={"/products"}>products</Link>
        </div>
      </nav>
    </div>
  );
}
