import React from "react";
import HeroHome from "./home/HeroHome";
import Recommend from "./home/Recommend";

import Gif from "./home/Gif";


import Tools from "./home/Tools";

import type { Metadata } from "next";
import Popular from "./home/Popular";
import Feature from "./home/Feature";
import Carousel from "./home/Carousel";
import HomePage from "@/components/testfadein";
import YourPage2 from "@/components/Homepage4";


import ScrollToTop from "@/components/ScollToTop";
import PoppularList from "./home/PopularList";
import News from "./home/News";


export const metadata: Metadata = {
  title: "Home | Skillsync",
  description: "Home | Skillsync",
};

function page() {
  return (
    <div>

      {/* <HomePage /> */}
      <HeroHome />
      <YourPage2/>


      {/* <Tools/> */}
      {/* <Carousel /> */}
      <Popular />

      {/* ถ้า pull ข้อมูลได้ */}
      <Recommend />

      {/* <Tools /> */}
      {/* <Feature /> */}
      <News/>
      
      <Gif/>
      {/* <News/> */}

      <ScrollToTop />
    </div>
  );
}

export default page;
