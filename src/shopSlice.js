import { createSlice } from "@reduxjs/toolkit";
import pic2 from "./bookPic/ابله.jpg";
import pic1 from "./bookPic/آخرین غول.jpg";
import pic3 from "./bookPic/جزیره.jpg";
import pic4 from "./bookPic/خاکستر.jpg";
import pic5 from "./bookPic/خیابان-تمساح-ها.jpg";
import pic6 from "./bookPic/درسو-اوزالا-.jpg";
import pic7 from "./bookPic/زن پلید.jpg";
import pic8 from "./bookPic/سرگرمی-در-سرحد-مرگ-.jpg";
import pic9 from "./bookPic/شتابان زیستن.jpg";
import pic10 from "./bookPic/صومعه-پارم-.jpg";
import pic11 from "./bookPic/فرزندان من.jpg";
import pic12 from "./bookPic/لوئی-لامبر-.jpg";
import pic13 from "./bookPic/مادام بوآری.jpg";
import pic14 from "./bookPic/مشعل در گوش.jpg";
import pic15 from "./bookPic/معجزه-در-باد-و-باران-.jpg";
import pic16 from "./bookPic/ژرمینال.jpg";
import pic17 from "./bookPic/کشتیبان واتیکان.jpg";
import pic18 from "./bookPic/کمدی-در-گذر-زمان-.jpg";
import pic19 from "./bookPic/کنفسیوس.jpg";
const initialState = {
  books: [
    { title: "ghool", id: 1, price: 1000, count: 1, picture: { pic1 } },
    { title: "ablah", id: 2, price: 1000, count: 1, picture: { pic2 } },
    { title: "jazireh", id: 3, price: 1000, count: 1, picture: { pic3 } },
    { title: "khakestar", id: 4, price: 1000, count: 1, picture: { pic4 } },
    { title: "temsah", id: 5, price: 1000, count: 1, picture: { pic5 } },
    { title: "ozala", id: 6, price: 1000, count: 1, picture: { pic6 } },
    { title: "palid", id: 7, price: 1000, count: 1, picture: { pic7 } },
    { title: "sargarmi", id: 8, price: 1000, count: 1, picture: { pic8 } },
    { title: "shetaban", id: 9, price: 1000, count: 1, picture: { pic9 } },
    { title: "parm", id: 10, price: 1000, count: 1, picture: { pic10 } },
    { title: "farzandan", id: 11, price: 1000, count: 1, picture: { pic11 } },
    { title: "lamber", id: 12, price: 1000, count: 1, picture: { pic12 } },
    { title: "madam", id: 13, price: 1000, count: 1, picture: { pic13 } },
    { title: "mashaal", id: 14, price: 1000, count: 1, picture: { pic14 } },
    { title: "mojezeh", id: 15, price: 1000, count: 1, picture: { pic15 } },
    { title: "jerminal", id: 16, price: 1000, count: 1, picture: { pic16 } },
    { title: "vatican", id: 17, price: 1000, count: 1, picture: { pic17 } },
    { title: "comedy", id: 18, price: 1000, count: 1, picture: { pic18 } },
    { title: "confocious", id: 19, price: 1000, count: 1, picture: { pic19 } },
  ],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = shopSlice.actions;

export default shopSlice.reducer;
