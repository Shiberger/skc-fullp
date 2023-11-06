import React from "react";
import Hero from "./Hero";
import HeroHome from "./HeroHome";
import Recommend from "./Recommend";

import Tools from "./Tools";
import type { Metadata } from 'next'
import Popular from "./Popular";
 
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


    </div>
  );
}

export default page;
