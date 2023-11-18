import React from "react";
import Map from "./Map";
import type { Metadata } from "next";
import OurDev from "./OurDev";

export const metadata: Metadata = {
  title: "Contact | Skillsync",
  description: "Home | Skillsync",
};
function page() {
  return (
    <div>
      <OurDev />
      <Map />
    </div>
  );
}

export default page;
