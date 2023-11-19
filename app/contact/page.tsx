import React from "react";
import Map from "./Map";
import type { Metadata } from "next";
import OurDev from "./OurDev";
import ScrollToTop from "@/components/ScollToTop";
import HeroContact from "./HeroContact";

export const metadata: Metadata = {
  title: "Contact | Skillsync",
  description: "Home | Skillsync",
};
function page() {
  return (
    <div>
    <HeroContact/>
      <OurDev />
      <Map />
      <ScrollToTop/>
    </div>
  );
}

export default page;
