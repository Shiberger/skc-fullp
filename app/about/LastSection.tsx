import React from "react";

function LastSection() {
  return (
    <div>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          News
        </h2>
        <p className="mb-6 text-lg text-slate-500">ข่าวสารที่น่าสนใจ</p>
        <div className="w-full">
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start pb-8">
            {/* news1 */}
            <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
              <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                  <span className="mb-1 block text-sm leading-6 text-indigo-500">
                    Creative
                  </span>
                  นิสิตCOSCI ได้รับรางวัลจากโครงการ Thailand Animator Festival
                  ครั้งที่ 6 (TAF)
                </h3>
                <div className="prose prose-slate prose-sm  text-slate-600 font-light">
                  <p>
                    นิสิตวิชาเอกกการออกแบบสื่อปฏิสัมพันธ์และมัลติมีเดีย
                    ได้รับรางวัล "TOP 10 BEST ANIMATOR AWARD & เข้ารอบ 30
                    ผลงานสุดท้าย" ถึง 3 ผลงาน
                  </p>
                </div>
                <a
                  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 mt-6 hoverZoom"
                  href="http://cosci.swu.ac.th/awards/multi-cyber-commu/2021/%E0%B8%99%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B1%E0%B8%A5%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2-%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%A5-top-10-best-animations-award-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%9A-30-%E0%B8%9C%E0%B8%A5%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A2"
                  target="blank"
                >
                  Read more
                  <span className="sr-only">
                    , Completely unstyled, fully accessible UI components
                  </span>
                  <svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </div>

              <img
                src="news1.png"
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                width={1216}
                height={640}
              />
            </li>
            {/* news2 */}
            <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
              <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                  <span className="mb-1 block text-sm leading-6 text-indigo-500">
                    Develop
                  </span>
                  Commu Thesis Exhibition Exclusive CO'XI ผลงานระดับมหาวิทยาลัย
                  (Exclusive for University)
                </h3>
                <div className="prose prose-slate prose-sm  text-slate-600 font-light">
                  <p>
                    นิทรรศการงานแสดงนวัตกรรมสื่อสารนิพนธ์ ออนไลน์
                    ของนิสิตชั้นปีที่ 4 เอกคอมพิวเตอร์เพื่อการสื่อสาร
                    มหาวิทยาลัยศรีนครินทรวิโรฒ
                  </p>
                </div>
                <a
                  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 mt-6 hoverZoom"
                  href="http://cosci.swu.ac.th/showcase/multi-cyber-commu/2022/commu-thesis-exhibition-2022-exclusive-coxi"
                  target="blank"
                >
                  Read more
                  <span className="sr-only">
                    , Completely unstyled, fully accessible UI components
                  </span>
                  <svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </div>


              <img
                src="news2.png"
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full "
                width={1216}
                height={640}
              />
           
            </li>
            {/* news3 */}
            <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
              <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                  <span className="mb-1 block text-sm leading-6 text-indigo-500">
                    Communication
                  </span>
                  2 ภาพยนตร์สั้นนวัตกรรมสื่อสารนิพนธ์
                  ได้รับรางวัลจากงานเทศกาลภาพยนตร์สั้น ครั้งที่ 23
                </h3>
                <div className="prose prose-slate prose-sm  text-slate-600 font-light">
                  <p>
                    นิสิตสาขาภาพยนตร์และสื่อดิจิทัล
                    ได้รับรางวัลในงานเทศกาลภาพยนตร์สั้น ครั้งที่ 23 จัดโดย
                    หอภาพยนตร์ร่วมกับมูลนิธิหนังไทย ที่เมืองมายา หอภาพยนตร์
                  </p>
                </div>
                <a
                  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 mt-6 hoverZoom"
                  href="http://cosci.swu.ac.th/awards/cinema/2020/thai-film-awards"
                  target="blank"
                >
                  Read more
                  <span className="sr-only">
                    , Completely unstyled, fully accessible UI components
                  </span>
                  <svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </div>

              <img
                src="news3.png"
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                width={1216}
                height={640}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
