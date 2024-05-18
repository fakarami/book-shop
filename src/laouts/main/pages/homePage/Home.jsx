import React from "react";
<<<<<<< HEAD
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
=======
>>>>>>> 2a87f8eb2a81edda7a20bde17740c1fd3a76a3f0
import slid1 from "./slideShowPic/american-literature.jpg";
import slid2 from "./slideShowPic/plays-2.jpg";
import slid3 from "./slideShowPic/plays.jpg";
import slid4 from "./slideShowPic/writers_1000.jpg";
<<<<<<< HEAD
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
=======
import { Button } from "@mui/material";
import "./home.css";
export default function Home() {
  return (
    <>
      <div>
        <img src={slid1} alt="slide1" className="slideStyle" />
        <img src={slid2} alt="slide1" className="slideStyle" />
        <img src={slid3} alt="slide1" className="slideStyle" />
        <img src={slid4} alt="slide1" className="slideStyle" />
        <Button
          variant="outlined"
          style={{ fontSize: 50, position: "absolute", right: 50, top: "60%" }}
        >
          &#10096;
        </Button>
        <Button
          variant="outlined"
          style={{ fontSize: 50, position: "absolute", left: 50, top: "60%" }}
        >
          &#10097;
        </Button>
      </div>
>>>>>>> 2a87f8eb2a81edda7a20bde17740c1fd3a76a3f0
    </>
  );
}
