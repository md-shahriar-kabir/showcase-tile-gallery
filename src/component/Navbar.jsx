"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b px-3">
      <nav className=" flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link href={'/'}>
         <div className="flex gap-1 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-[#1C1C1C] text-xl">TILE<span className="text-[#D4AF37]"> LUX</span></h3>
        </div>
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="font-semibold">Home</Link>
          </li>
          <li>
            <Link href={"/all-tiles"}className="font-semibold">All Tiles</Link>
          </li>
          
          <li>
            <Link href={"/profile"}className="font-semibold">My Profile</Link>
          </li>
        </ul>


        <div className="flex gap-4">
          <ul className="flex items-center gap-2  text-sm">
            <li>
              <Link 
              href={"/signup"}
              ><Button variant="outline"  className="font-semibold ">Sign Up</Button> </Link>
            </li>
            <li>
              <Link 
              href={"/signin"}
              ><Button variant="outline"  className="font-semibold ">Sign In</Button> </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;