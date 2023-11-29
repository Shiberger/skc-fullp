import React from "react";

function News() {
  return (
    <div>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-4">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                  <div className="flex items-center gap-12">
                    <h2 className="text-2xl font-bold text-purple-500 lg:text-3xl">
                      Sync
                      <span className="text-2xl font-bold text-slate-600 lg:text-3xl">
                        Your
                      </span>
                      Skill
                    </h2>
                    <p className="hidden max-w-screen-sm text-slate-500 md:block">
                      Upskill for empower yourself, impact society, and
                      continuously upskill for Social Changes.
                      นำทักษะมาใช้และสร้างสรรค์สิ่งใหม่เพื่อพัฒนาตนเองและสังคม
                    </p>
                  </div>
                  <a
                    href="/about"
                    className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-purple-300 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base hoverZoom"
                  >
                    About
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                  {/* image - start */}
                  <a
                    href="/about"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1612130536441-95ece5dcbb86?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Real experience
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="/about"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Creative Thinking
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="/about"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Various tools
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="/about"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1634544396322-023919734260?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Photo by Lorenzo Herrera"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Social Communication
                    </span>
                  </a>
                  {/* image - end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
