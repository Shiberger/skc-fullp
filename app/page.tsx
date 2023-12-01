import React from "react";
import HeroHome from "./home/HeroHome";
import Carousels from "./home/Carousels";
import Popular from "./home/Popular";
import Recommend from "./home/Recommend";
import News from "./home/News";
import Gif from "./home/Gif";

import ScrollToTop from "@/components/ScollToTop";

import type { Metadata } from "next";
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

      <News />
      <Gif />
      <ScrollToTop />
    </div>
  );
}

export default page;
