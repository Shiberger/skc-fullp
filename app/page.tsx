import React from "react";
import Hero from "./home/Hero";
import HeroHome from "./home/HeroHome";
import Recommend from "./home/Recommend";
import FadeInComponent from "./home/FAQ";

import Tools from "./home/Tools";

import type { Metadata } from "next";
import Popular from "./home/Popular";
import Feature from "./home/Feature";
import Carousel from "./home/Carousel";
import HomePage from "@/components/testfadein";


import ScrollToTop from "@/components/ScollToTop";


export const metadata: Metadata = {
  title: "Home | Skillsync",
  description: "Home | Skillsync",
};

function page() {
  return (
    <div>
      {/* <Hero/> */}
      {/* <HomePage /> */}
      <HeroHome />
      {/* <Tools/> */}
      <Popular />
      <Carousel />
      <Recommend />
      <Tools />
      <Feature />
      <ScrollToTop />
    </div>
  );
}

export default page;
