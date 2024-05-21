import React from "react";
import "./footer.scss";
import { IconButton, Tooltip } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <>
      <footer>
        <br />
        <ul class="moshtari">
          <li>
            <b>ارتباط با ما</b>
            <ul>
              <li>تماس با ما</li>
              <li>درباره ما</li>
              <li>پرسش های متداول</li>
              <li>همکاری با ما</li>
            </ul>
          </li>
          <li>
            <b>خدمات مشتریان</b>
            <ul>
              <li>راهنمای خرید</li>
              <li>ارسال و تحویل کالا</li>
              <li>پیگیری سفارش</li>
              <li>قوانین و مقررات</li>
              <li>پیشنهادات و انتقادات</li>
            </ul>
          </li>
        </ul>
        <hr />
        <div className="divIcon">
          <Tooltip title="Telegram">
            <IconButton>
              <TelegramIcon className="icon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton>
              <InstagramIcon className="icon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="YouTube">
            <IconButton>
              <YouTubeIcon className="icon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter">
            <IconButton>
              <TwitterIcon className="icon" />
            </IconButton>
          </Tooltip>
        </div>
      </footer>
    </>
  );
}
