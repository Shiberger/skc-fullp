import React from "react";
import Hero from "./Hero";
import Recommend from "./Recommend";
import Tools from "./Tools";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home | Skillsync',
  description: '...',
}
 




function page() {
  return (
    <div>
      <Hero/>
      <Recommend/>
      <Tools/>


    </div>
  );
}

export default page;
