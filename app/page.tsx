import React from "react";
import HeroHome from "./home/HeroHome";
import Recommend from "./home/Recommend";

import Gif from "./home/Gif";

import Tools from "./home/Tools";

import type { Metadata } from "next";
import Popular from "./home/Popular";
import Feature from "./home/Feature";


import ScrollToTop from "@/components/ScollToTop";
import PoppularList from "./home/PopularList";
import News from "./home/News";
import Carousels from "./home/Carousels";
import Gallery from "./home/Gallery";

export const metadata: Metadata = {
  title: "Home | Skillsync",
  description: "Home | Skillsync",
};

function page() {
  return (
    <div>

      <HeroHome />
      <Carousels />
      <Popular />

      {/* BUG ถ้า pull ข้อมูลได้ */}
      {/* <Recommend /> */}

      {/* <Feature /> */}
      <News />
      <Gif />
      <ScrollToTop />
    </div>
  );
}

export default page;
