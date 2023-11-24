
import SlideInFromLeft from "@/components/SlideInFromLeftProps";
import CardSwiper from "@/components/SlideSwiper";
import React from "react";

function Carousels() {
  return (
    <div>
      <SlideInFromLeft>
        <CardSwiper
          slides={[
            { src: "/cosci7.jpeg", alt: "Hero Image 1" },
            { src: "/cosci6.jpeg", alt: "Hero Image 2" },
            { src: "/cosci7.jpeg", alt: "Hero Image 3" },
            { src: "/cosci5.jpeg", alt: "Hero Image 4" },
            { src: "/cosci8.jpeg", alt: "Hero Image 5" },
          ]}
        />
      </SlideInFromLeft>
    </div>
  );
}

export default Carousels;
