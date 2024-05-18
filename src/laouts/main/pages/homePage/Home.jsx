import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slid1 from "./slideShowPic/american-literature.jpg";
import slid2 from "./slideShowPic/plays-2.jpg";
import slid3 from "./slideShowPic/plays.jpg";
import slid4 from "./slideShowPic/writers_1000.jpg";
import "./home.scss";
export default function Home() {
  return (
    <>
      <Slide>
        <div className="each-slide-effect">
          <div>
            <span>
              <img src={slid1} alt="slid1" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img src={slid2} alt="slid2" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img src={slid3} alt="slid3" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img src={slid4} alt="slid4" />
            </span>
          </div>
        </div>
        ّ
      </Slide>
    </>
  );
}
