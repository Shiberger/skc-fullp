import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-24 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
              Welcome to Skillsync
              <br className="hidden lg:inline-block" />
              by COSCI SWU
            </h1>
            <p className="mb-8 leading-relaxed">
              เว็บไซต์ลงงานและสร้างโปรไฟล์สะสมผลงานบนเว็บไซต์ เพื่อส่งเสริมนิสิต
              cosci ให้มีรายได้เสริมและเป็นการแสดงศักยภาพของนิสิตคณะ cosci
            </p>
            <div className="flex justify-center">
              <Link href={"/"}>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
              >
                Find Projects
              </button>
              
              </Link>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <iframe
              className="object-cover object-center rounded-lg"
              src="https://my.spline.design/purple3diconscopy-d48ce58b2d9c452093cfffca390cc377/"
              frameBorder={0}
              width="100%"
              height="300"
            />
          </div>

          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Hero;
