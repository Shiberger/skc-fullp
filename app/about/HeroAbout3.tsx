import React from "react";
import Link from "next/link";

function HeroAbout3() {
  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-5xl tracking-tight font-bold text-gray-800 sm:text-5xl md:text-6xl py-3">
              <span className="block xl:inline">Why </span>
              <span className="block text-indigo-600 xl:inline">Skillsyn?</span>
            </h1>
            <p className="mt-3 text-base font-light text-slate-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              เพราะ Skillsync
              จะช่วยเปิดโอกาสให้ทั้งฝั่งนิสิต-นักศึกษาได้แสดงฝีมือ ความสามารถ
              และได้นำสิ่งที่เรียนรู้มาใช้จริง
              และผู้ใช้ภายนอกก็จะได้มีส่วนรวมในการให้โอกาสและเสริมสร้างประสบการณ์ให้แก่นิสิต-นักศึกษา
            </p>
          </div>
          {/*   Image Section     */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 lg:ps-8">
            <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full hoverZoom">
              <iframe
                className="object-cover object-center shadow-md rounded-lg"
                src="https://my.spline.design/purple3diconscopy-d48ce58b2d9c452093cfffca390cc377/"
                frameBorder={0}
                width="100%"
                height="310"
              />
            </div>
          </div>
          {/*   End of Image Section     */}
        </div>
      </section>
    </div>
  );
}

export default HeroAbout3;
