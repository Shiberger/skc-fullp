"use client";

import React, { useEffect, useState } from "react";

// import { FaAnglesUp } from 'react-icons/fa6'
import { motion } from "framer-motion";
import Button from "./Button";

// const MotionButton = motion(Button)

export default function ScrollToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
        {backToTopButton && (
            <button
            title="up"
            className ="fixed bottom-5 right-5 bg-purple-400 text-white z-10 drop-shadow-md 
            transition-all duration-300 ease-in-out hover:drop-shadow-lg hover:bg-purple-300 focus:bg-purple-300 
            md:bottom-7 md:right-7 rounded-full btnNav"
            onClick={backToTop}>
            <img src="/GoUp.svg" alt="" className="w-10 h-10"/>


           
            </button>
        )}

    </div>
  )
}
