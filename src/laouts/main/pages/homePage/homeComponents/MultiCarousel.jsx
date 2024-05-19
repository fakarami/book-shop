import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../home.scss";
import { useSelector } from "react-redux";

export default function MultiCarousel() {

  const books = useSelector((state) => state.shop.books);
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
      {books.map((book) => (
        <div key={book.id} className="backCarouselStyle" >
          <img
            src={book.picture}
            alt={book.title}
          />
        </div>
      ))}

    </Carousel>
  );
}
