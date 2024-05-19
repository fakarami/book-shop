import React from "react";
import Slider from "./homeComponents/Slider";
import MultiCarousel from "./homeComponents/MultiCarousel";
import AccordionBox from "./homeComponents/AccordionBox";
export default function Home() {
  return (
    <>
      <Slider />
      <hr />
      <MultiCarousel />
      <AccordionBox />
    </>
  );
}
