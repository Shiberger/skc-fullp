"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FAQtext } from "@/constants";

function Gif() {
  return (
    <div>
      <div
        className="dshero min-h-100vh"
        style={{
          backgroundImage: "url(/cosci1.jpeg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="dshero-overlay bg-opacity-60 py-2 shadow-lg backdrop-blur-sm">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 lg:ms-10">
              <Player
                autoplay
                loop
                src="pointerboy.json"
                style={{ height: "350px", width: "350px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className="lg:flex-grow lg:pr-10 md:w-1/2 lg:pl-30 md:pl-1 md:mr-10 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="dscollapse dscollapse-arrow bg-base-200 mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="dscollapse-title text-xl font-medium">
                  {/*  */}
                  <p>hello</p>
                  {/* {FAQtext.map((link) => (
                <p
                 
                  className="text-black hover:text-purple-500 focus:text-purple-300 text-md my-1 px-2 py-1 rounded-sm pr-3 hover:bg-slate-200 "
                >
                  {link.title}
                </p>
              ))} */}
                </div>
                <div className="dscollapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="dscollapse dscollapse-arrow bg-base-200 mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="dscollapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="dscollapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="dscollapse dscollapse-arrow bg-base-200 mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="dscollapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="dscollapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
}

export default Gif;
