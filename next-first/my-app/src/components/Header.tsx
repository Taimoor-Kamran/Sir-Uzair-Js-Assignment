"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex justify-center items-center gap-5 py-3 bg-blue-300 shadow-sm">
      <Link href={"/blogs"}>
        <h1 className="font-medium hover:underline cursor-pointer">Blogs</h1>
      </Link>
      <Link href={"/users"}>
        <h1
          className={`font-medium hover:underline cursor-pointer ${
            pathname.includes("blogs") ? "underline font-bold" : ""
          }`}
        >
          Users
        </h1>
      </Link>
      <Link href={"/contact"}>
        <h1 className="font-large hover:underline cursor-pointer">Contact</h1>
      </Link>
      <Link href={"/dashboard"}>
        <h1 className="font-large hover:underline cursor-pointer">Dashboard</h1>
      </Link>
      <Link href={"/about"}>
        <h1 className="font-medium hover:underline cursor-pointer">About</h1>
      </Link>
    </div>
  );
};

export default Header;
