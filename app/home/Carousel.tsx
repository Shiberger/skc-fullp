"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import "../style/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideSwiper from "@/components/SlideSwiper";

export default function App() {
  return (
    <div className="mx-10 py-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper px-3 pb-10 drop-shadow-md "
      >
        <SwiperSlide>
          <img
            src="/cosci7.jpeg"
            alt="Home Img"
            className="mx-auto rounded-lg h-[200px] w-[400px] object-cover sm:h-[500px] md:h-[600px] sm:w-[1200px] align-items-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/cosci6.jpeg"
            alt="Home Img"
            className="mx-auto rounded-lg h-[200px] w-[400px] object-cover sm:h-[500px] md:h-[600px] sm:w-[1200px] align-items-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/cosci4.jpeg"
            alt="Home Img"
            className="mx-auto rounded-lg h-[200px] w-[400px] object-cover sm:h-[500px] md:h-[600px] sm:w-[1200px] align-items-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/cosci5.jpeg"
            alt="Home Img"
            className="mx-auto rounded-lg h-[200px] w-[400px] object-cover sm:h-[500px] md:h-[600px] sm:w-[1200px] align-items-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/cosci8.jpeg"
            alt="Home Img"
            className="mx-auto rounded-lg h-[200px] w-[400px] object-cover sm:h-[500px] md:h-[600px] sm:w-[1200px] align-items-center"
          />
        </SwiperSlide>
      
      
      </Swiper>
    </div>
  );
}
