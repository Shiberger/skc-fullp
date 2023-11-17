import React from "react";
import Link from "next/link";

function Popular() {
  return (
    <div>
      <div className="text-center p-2 mt-10">
        <div className=" flex justify-center">
          <img className="relative w-10 pb-5" src="/fire.svg" alt="" />
          <h1 className="font-bold text-4xl mb-1 ">Poppular</h1>
          <img className="relative w-10  pb-5" src="/fire.svg" alt="" />
        </div>
        <h1 className="text-2xl text-slate-400 ">
          มาดูกันว่าอะไรกำลังมาแรงในช่วงนี้
        </h1>
      </div>

      {/*  */}
      <div className="p-1 flex flex-wrap items-center justify-center">
        {/* card 1 */}
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg group">
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img className="relative w-40" src="/ux.svg" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">UX/UI</span>
              <Link href={"/projectpage?category=UI/UX"}>
                <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-5 py-2 leading-none flex items-center shadow-md btnNav ">
                  Go
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img className="relative w-40" src="/style.svg" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Front-End</span>
              <Link href={"/projectpage?category=Frontend"}>
                <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-5 py-2 leading-none flex items-center shadow-md btnNav ">
                  Go
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg group">
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img className="relative w-40" src="/code.svg" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Full-Stack</span>
              <Link href={"/projectpage?category=Full-Stack"}>
                <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-5 py-2 leading-none flex items-center shadow-md btnNav ">
                  Go
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img className="relative w-40" src="/cart.svg" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">E-Commerce</span>
              <Link href={"/projectpage?category=E-commerce"}>
                <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-5 py-2 leading-none flex items-center shadow-md btnNav ">
                  Go
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
