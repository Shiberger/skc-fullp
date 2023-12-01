"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FAQtext, footerLinks } from "@/constants";

function Gif() {
  const faq = [
    {
      content: "สามารถลงงานได้มากกว่า 1 หมวดหมู่หรือไม่?",
      answer:
        "คุณสามารถลงกี่งาน กี่หมวดหมู่ก็ได้ โดยสามารถเลือกลงหมวดหมู่ได้ตอน Create ผลงานแต่ละงาน",
    },
    {
      content: "สามารถเพิ่มหมวดหมู่ เพื่อลงผลงานได้ไหม? ",
      answer:
        "คุณสามารถเลือกลงในหมวดหมู่ที่ใกล้เคียงที่สุดหรือหากไม่มีหมวดหมู่ที่คุณต้องการสามารถแนะนำหมวดหมู่ที่คุณต้องการให้เพิ่มมาให้เราได้ที่หน้า Contact us",
    },
    {
      content: "ไม่ใช่นิสิต COSCI SWU สามารถลงงานได้ไหม?",
      answer:
        "สามารถลงได้ ถ้าหากคุณมีผลงานที่เกี่ยวข้องกับ Categoryหรือหมวดหมู่ที่เรามี",
    },
  ];
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
              {faq.map((item, index) => (
                <div className="dscollapse dscollapse-arrow bg-purple-200 mb-3 shadow-xl">
                  <input type="radio" name="my-accordion-2" />
                  <div className="dscollapse-title text-lg font-medium">
                    {item.content}
                  </div>
                  <div className="dscollapse-content">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gif;
