import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.text}
              className="text-black hover:text-purple-500 focus:text-purple-300"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

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

      <div className="bg-gray-100">
        <div className="h-screen flex overflow-hidden bg-gray-200">
          {/* Sidebar */}
          <div
            className="absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
            id="sidebar"
          >
            {/* Your Sidebar Content */}
            <div className="p-4">
              <h1 className="text-2xl font-semibold">Sidebar</h1>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="#" className="block hover:text-indigo-400">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-indigo-400">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-indigo-400">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-indigo-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <div className="bg-white shadow">
              <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-2">
                  <h1 className="text-xl font-semibold">Animated Drawer</h1>
                  <button
                    className="text-gray-500 hover:text-gray-600"
                    id="open-sidebar"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Content Body */}
            <div className="flex-1 overflow-auto p-4">
              <h1 className="text-2xl font-semibold">Welcome to our website</h1>
              <p>... Content goes here ...</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
      >
        Sign up for free
      </a>
    </nav>
  );
};
