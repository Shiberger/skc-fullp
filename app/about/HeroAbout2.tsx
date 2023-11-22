import React from "react";
import Link from "next/link";

function HeroAbout2() {
  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          {/*   Image Section     */}
          <div className="lg:inset-y-0  md:order-first lg:right-0 lg:w-1/2 my-2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-md hoverZoom"
              // src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          {/* Content */}
          <div className="sm:text-center lg:text-left lg:ps-8">
            <h1 className="text-5xl tracking-tight font-bold text-gray-800 sm:text-5xl md:text-6xl py-3">
              <span className="block xl:inline">What is </span>
              <span className="block text-indigo-600 xl:inline">Skillsyn?</span>
            </h1>
            <p className="mt-3 text-base font-light text-slate-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Skillsync คือ
              เว็บไซต์สำหรับการลงผลงานและสร้างโปรไฟล์สะสมผลงานบนเว็บไซต์
              เพื่อส่งเสริมนิสิในการสร้างรายได้และเป็นการแสดงศักยภาพของนิสิต
              COSCI
              และมีเป้าหมายเพื่อเป็นที่สะสมและนำเสนอผลงานของนิสิตนักศึกษาทั่วไป
            </p>
            {/* Button Section */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="http://cosci.swu.ac.th/"
                  target="blank"
                  className="btnNav w-full flex items-center justify-center px-8 py-3 border border-transparent text-white font-medium rounded-md text-gray-800 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  {" "}
                  COSCI คือ?
                </Link>
              </div>
            </div>
            {/* End of Button Section */}
          </div>

          {/*   End of Image Section     */}
        </div>
      </section>
    </div>
  );
}

export default HeroAbout2;
