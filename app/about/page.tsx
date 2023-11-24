import React from "react";
import HeroAbout from "./HeroAbout";
import HeroAbout2 from "./HeroAbout2";
import GridAbout from "./GridAbout";
import HeroAbout3 from "./HeroAbout3";
import LastSection from "./LastSection";
import ScrollToTop from "@/components/ScollToTop";


function page() {
  return (
    <div>
      <HeroAbout />
      <HeroAbout2 />
      <GridAbout />
      <HeroAbout3 />
      <LastSection />
      <ScrollToTop />
    </div>
  );
}

export default page;
