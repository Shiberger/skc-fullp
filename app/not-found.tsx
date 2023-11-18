import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

function NotFound() {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link href={"/home"}>
                  <button className="sm:w-full lg:w-auto my-2 rounded-md py-4 px-8 text-center bg-gradient-to-br from-primary-purple to-purple-400 font-dm text-sm font-medium text-white shadow-md shadow-perple-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                    Back Home
                  </button>
         
                  
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
