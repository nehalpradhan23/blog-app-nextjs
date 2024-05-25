import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "@/components/authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <Link
        href={"/"}
        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text"
      >
        Blog App
      </Link>
      <div className="flex gap-3 text-xl items-center ">
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
