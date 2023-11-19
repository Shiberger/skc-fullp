import React from "react";
import Hero from "./home/Hero";
import HeroHome from "./home/HeroHome";
import Recommend from "./home/Recommend";
import FadeInComponent from "./home/FAQ";


import Tools from "./home/Tools";

import type { Metadata } from 'next'
import Popular from "./home/Popular";
import Feature from "./home/Feature";
import Carousel from "./home/Carousel";

import ScrollToTop from "@/components/ScollToTop";

export const metadata: Metadata = {
  title: 'Home | Skillsync',
  description: 'Home | Skillsync',
}
 




function page() {
  return (
    <div>
      {/* <Hero/> */}
      <HeroHome/>
      {/* <Tools/> */}
      <Popular/>
      <Recommend/>
      <Tools/>
      <Feature/>
      {/* <Carousel/> */}
      <ScrollToTop/>

    



    </div>
  );
}

export default page;
