import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
export default function Raiting() {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Typography component="legend">Controlled</Typography>
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
