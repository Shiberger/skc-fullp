'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/style/swiper.css'
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


interface Slide {
  src: string;
  alt: string;
}

interface CardSwiperProps {
  slides: Slide[];
}

const CardSwiper: React.FC<CardSwiperProps> = ({ slides }) => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper px-3 pb-10 pt-10 drop-shadow-md"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className='mx-auto rounded-lg h-[200px] w-[400px] object-cover sm:h-[500px] md:h-[600px] sm:w-[1200px] align-items-center'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default CardSwiper;