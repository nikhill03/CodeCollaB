import { NavLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "../lib/session";
import { signOut } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";

//async can be used since it is a server side component & can be rendered asynchronously
const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="CodeCollaB" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      {session?.user ? (
        <>
          <ProfileMenu session = {session}/>

          <Link href="/create-project">Share Work</Link>

          <button type="button" className="text-sm" onClick={signOut}></button>
        </>
      ) : (
        <AuthProviders />
      )}
      <div className="flexCenter gap-4"></div>
    </nav>
  );
};

export default Navbar;
