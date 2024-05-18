import React from "react";
import slid1 from "./slideShowPic/american-literature.jpg";
import slid2 from "./slideShowPic/plays-2.jpg";
import slid3 from "./slideShowPic/plays.jpg";
import slid4 from "./slideShowPic/writers_1000.jpg";
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
    </>
  );
}
