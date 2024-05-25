"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  let location = usePathname();
  // console.log(location);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    // console.log(windowWidth);
    if (windowWidth > 640) {
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setOpen(false);
  }, [location]);

  // ================================================
  return (
    <div className="">
      <div className="flex max-sm:hidden gap-4">
        {status === "unauthenticated" ? (
          <Link href="/login" className="hover:bg-blue-500 p-2 rounded-md">
            Login
          </Link>
        ) : (
          <>
            <Link href="/write" className="hover:bg-blue-500 p-2 rounded-md">
              Write
            </Link>
            <span
              className="hover:bg-blue-500 p-2 rounded-md"
              onClick={signOut}
            >
              Logout
            </span>
          </>
        )}
      </div>
      {/* small screen menu  =================================================*/}
      <div
        className="hidden max-sm:flex cursor-pointer hover:bg-blue-500 p-2 rounded-md"
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </div>
      {/* =========================================== */}
      {open && (
        // <div className="bg-red-500 absolute backdrop-blur-md w-full flex items-center justify-center z-[999]">
        <div className="bg-blue-500 mt-2 py-5 absolute right-0 w-full flex flex-col gap-6 items-center justify-center backdrop-blur-md z-[999] ">
          {/* <Link href="/">Home</Link> */}
          {/* {status === "notauthenticated" ? ( */}
          {status === "unauthenticated" ? (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" className="hover:underline">
                Write
              </Link>
              <button className="hover:underline" onClick={signOut}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
