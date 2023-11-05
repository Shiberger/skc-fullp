import React from "react";
import Link from "next/link";

function HeroHome() {
  return (
    <div className="mb-10">
      {/* Container */}
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src="/workplace1.jpg"
            alt="Winding mountain road"
          />
        </div>
        {/* Close Image Column */}
        {/* Text Column */}
        <div className="max-w-lg bg-gradient-to-br from-purple-200 to-white  md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-5 rounded-lg">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-primary-purple lg:text-4xl">
              Welcome to Skillsync
            </h2>
            <p className="mt-4">
              เว็บไซต์ลงงานและสร้างโปรไฟล์สะสมผลงานบนเว็บไซต์ เพื่อส่งเสริมนิสิต
              cosci ให้มีรายได้เสริมและเป็นการแสดงศักยภาพของนิสิตคณะ cosci
            </p>
            {/* Button Container */}
            <div className="mt-8">
              {/* <a href="#" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
          More</a> */}
              <Link href={"/"}>
                <button
                  type="button"
                  className="inline-block w-full text-center text-lg font-medium  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  rounded-lg  px-5 py-2.5 mr-2 mb-2 transition-transform duration-200 ease-in-out hover:scale-[1.03] md:w-48"
                >
                  Find Projects
                </button>
              </Link>
            </div>
          </div>
          {/* Close Text Wrapper */}
        </div>
        {/* Close Text Column */}
      </div>
    </div>
  );
}

export default HeroHome;
