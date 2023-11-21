'use client'

import React from "react";
import Image from "next/image";
import Link from 'next/link'

import { NavLinks } from "@/constants";
import { getCurrentUser } from "@/lib/session";
import { usePathname } from 'next/navigation'

import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";
 
export function NavbarLinks() {
  const pathname = usePathname();
  const session = getCurrentUser();

  return (
    <nav>
           <div className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
      <div className="dsnavbar mx-auto flex max-w-7xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-1 py-3 ">
        <div className="dsnavbar-start">
          <div className="dsdropdown">
            <label tabIndex={0} className="dsbtn dsbtn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Hamburger Menu */}
            <ul
              tabIndex={0}
              className="dsmenu dsmenu-sm dsdropdown-content my-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.text}
                  className="text-black hover:text-purple-500 focus:text-purple-300 text-md my-1 px-2 py-1 rounded-sm pr-3 hover:bg-slate-200 btnNav"
                >
                  {link.text}
                </Link>
             
              
              ))}
         
            </ul>
          </div>
          <Link href="/home" className="flex btnNav">
            <Image
              src="/logoSS.svg"
              loading="lazy"
              style={{ color: "transparent" }}
              width={50}
              height={45}
              className="transition-transform duration-200 ease-in-out hover:scale-[1.3]"
              alt="aa"
            />
          </Link>
          <Link
            href={"/home"}
            className="ms-1 pt-1 btnNav normal-case text-xl font-bold text-primary-purple"
          >
            Skillsync
          </Link>
        </div>
        <div className="dsnavbar-center hidden lg:flex">
          <ul className="hidden items-center justify-center gap-6 md:flex">
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <ul className="hidden items-center justify-center gap-6 md:flex">
       
        <li>
          <Link className={`link ${pathname === '/home' ? 'NavActive' : 'hover:text-pink-500 text-purple-500 '}`} href="/home">
            Home
          </Link>
        </li>
      
        <li>
          <Link className={`link ${pathname === '/about' ? 'NavActive' : 'hover:text-pink-500 text-purple-500'}`} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/projectpage' ? 'NavActive' : 'hover:text-pink-500 text-purple-500'}`} href="/projectpage">
            Project
          </Link>
        </li>
{/*       
                {NavLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.text}
                    className="text-black hover:text-purple-500 focus:text-purple-300 text-md btnNav"
                  >
                    {link.text}
                  </Link>
                  
                ))}
       */}
              </ul>

            </li>
          </ul>
        </div>
        <div className="dsnavbar-end">
          <div className="flex-grow" />
          <div className="items-center justify-center gap-6 md:flex">
            <div className="flexCenter gap-4">
              {session?.user ? (
                <>
                  <ProfileMenu session={session} />

                  <Link href="/create-project">
                    <Button title="Share work" />
                  </Link>
                </>
              ) : (
                <AuthProviders />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    </nav>
  )
};
