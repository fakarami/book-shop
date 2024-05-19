import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slid1 from "../slideShowPic/american-literature.jpg";
import slid2 from "../slideShowPic/plays-2.jpg";
import slid3 from "../slideShowPic/plays.jpg";
import slid4 from "../slideShowPic/writers_1000.jpg";
import "../home.scss";
export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <img src={slid2} alt="pic2" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid3} alt="pic3" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid4} alt="pic4" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid1} alt="pic1" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid2} alt="pic2" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid3} alt="pic3" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid4} alt="pic4" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid2} alt="pic2" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid3} alt="pic3" className="imgCarouselStyle" />
      </div>
      <div>
        <img src={slid4} alt="pic4" className="imgCarouselStyle" />
      </div>
    </Carousel>
  );
}
