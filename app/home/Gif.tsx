"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Gif() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
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
          <div className="lg:flex-grow md:w-1/2 lg:pl-30 md:pl-10 md:mr-10 flex flex-col md:items-start md:text-left items-center text-center">
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
      </section>
    </div>
  );
}

export default Gif;
