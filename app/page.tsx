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
      <Recommend />
      {/* <Tools /> */}
      {/* <Feature /> */}
      <Gif/>

      <ScrollToTop />
    </div>
  );
}

export default page;
