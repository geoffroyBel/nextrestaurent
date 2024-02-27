"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession, signOut, signIn } from "next-auth/react";
export default function HeaderAuth() {
  const session = useSession();
  let authContent;
  console.log(session);

  if (session.status === "loading") {
    authContent = "";
  } else if (session?.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <Button onClick={() => signOut()} type="submit" color="primary">
              Sign Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <div className="flex flex-row space-x-2">
        <NavbarItem>
          <Button
            onClick={() => signIn()}
            type="submit"
            color="secondary"
            variant="bordered"
          >
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </div>
    );
  }
  return authContent;
}
