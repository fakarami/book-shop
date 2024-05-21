import { Box, Paper } from "@mui/material";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            margin: "auto",
            padding: 7,
          },
        }}
      >
        <Paper>
          بسیار خرسندیم که میزبان شما در خانه کتاب هستیم.
          <br /> خانه کتاب, شعبه مجازی فروشگاه‌ کتاب است.
          <ul>
            امکان خرید اینترنتی کالاهای فرهنگی از طریق سایت خانه کتاب در طبقه
            بندی زیر فراهم است:
          </ul>
          <li> محصولات دیداری و شنیداری در حوزه موسیقی، فیلم و تاتر</li>
          <li> نوشت افزار و کمک آموزشی</li>
          <li> کتاب</li>
          <li> دست‌سازه های هنری</li>
        </Paper>
      </Box>
    </div>
  );
}
