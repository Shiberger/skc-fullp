import React from "react";
import FadeIn from "@/components/FadeIn";

const HeroAbout: React.FC = () => {
  return (
    <div>
      <FadeIn>
        <div
          className="dshero min-h-100vh"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1605918321412-d6504db4748e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <div className="dshero-overlay bg-opacity-60 py-10"></div>
          <div className="dshero-content text-center text-neutral-content">
            <div className="max-w-md my-10">
              <h1 className="text-4xl font-bold text-center text-gray-800 capitalize lg:text-5xl">
                About Us
              </h1>
              <p className="max-w-2xl mx-auto my-3 text-center text-lg text-slate-300">
                เกี่ยวกับพวกเรา
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default HeroAbout;
