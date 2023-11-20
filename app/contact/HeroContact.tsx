import React from "react";
import Link from "next/link";

function HeroContact() {
  return (
    <div>
      <div
        className="dshero min-h-100vh"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="dshero-overlay bg-opacity-60 py-20"></div>
        <div className="dshero-content text-center text-neutral-content">
          <div className="max-w-md my-10">
            {/* <h1 className="mb-5  text-5xl font-bold">Contact Us</h1> */}
          </div>
          {/* Cards Dev */}
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 capitalize lg:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto my-3 text-center text-lg text-slate-300">
              ติดต่อพวกเราได้ที่นี่
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContact;
