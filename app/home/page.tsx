

import React from "react";
import Hero from "./Hero";
import HeroHome from "./HeroHome";
import Recommend from "./Recommend";
import FadeInComponent from "./FAQ";


import Tools from "./Tools";

import type { Metadata } from 'next'
import Popular from "./Popular";
import Feature from "./Feature";
import Carousel from "./Carousel";
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
      <Carousel/>

      <Recommend/>
      <Tools/>
      <Feature/>
     
      <ScrollToTop/>
    



    </div>
  );
}

export default page;
