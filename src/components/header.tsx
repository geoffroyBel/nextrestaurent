import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";

import Link from "next/link";
import HeaderAuth from "./header-auth";
export default async function Header() {
  //   const session = await auth();
  //   let authContent: React.ReactNode;
  //   if (session?.user) {
  //     authContent = (
  //       <Popover>
  //         <PopoverTrigger>
  //           <Avatar src={session.user.image || ""} />
  //         </PopoverTrigger>
  //         <PopoverContent>
  //           <div className="p-4">
  //             <form action={actions.signOut}>
  //               <Button type="submit" color="primary">
  //                 Sign Out
  //               </Button>
  //             </form>
  //           </div>
  //         </PopoverContent>
  //       </Popover>
  //     );
  //   } else {
  //     authContent = (
  //       <div className="flex flex-row space-x-2">
  //         <NavbarItem>
  //           <form action={actions.signIn}>
  //             <Button type="submit" color="secondary" variant="bordered">
  //               Sign In
  //             </Button>
  //           </form>
  //         </NavbarItem>
  //         <NavbarItem>
  //           <form action={actions.signOut}>
  //             <Button type="submit" color="primary" variant="flat">
  //               Sign Up
  //             </Button>
  //           </form>
  //         </NavbarItem>
  //       </div>
  //     );
  //   }
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          El Jasmin
        </Link>
      </NavbarBrand>
      <NavbarContent justify="start">
        <NavbarItem>
          <Link color="foreground" href="/">
            Acceuil
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/recipies" aria-current="page">
            Recettes
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
