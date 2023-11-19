import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HeroHome() {
  return (
    <div className=" lg:bg-gradient-to-b from-white to-purple-200">
      {/* Container */}
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl md:mb-60 lg:mb-10 ">
        {/* Image Column */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto lg:mb-10">
          <img
            className="h-full w-full object-cover"
            src="/workplace1.jpg"
            alt="workplace"
          />
        </div>
        {/* Close Image Column */}
        {/* Text Column */}
        <div className="max-w-lg bg-gradient-to-br from-white to-white  md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-5 rounded-lg">
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
              <Link href={"/projectpage"}>
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
      <div
        className="dshero min-h-100vh"
        style={{
          backgroundImage: "url(/gear.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="dshero-overlay bg-opacity-60 py-20 shadow-lg"></div>
        <div className="dshero-content text-center text-neutral-content">
          <div className="max-w-md lg:max-w-lg">
            <h1 className="mb-5 text-3xl font-thin italic">
              "Empower Yourself, Impact Society: Continuously Upskill and Sync
              for Social Change"
            </h1>
            {/* <p className="mb-2">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
