import React from "react";
import Rating from "@mui/material/Rating";
export default function Raiting() {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        dir="ltr"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}
