import { createSlice } from "@reduxjs/toolkit";
import pic1 from "./bookPic/آخرین غول.jpg";
import pic2 from "./bookPic/ابله.jpg";
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
    { id: 1, title: "آخرین غول", price: 1000, count: 0, picture: pic1 },
    { id: 2, title: "ابله", price: 1000, count: 0, picture: pic2 },
    { id: 3, title: "جزیره", price: 1000, count: 0, picture: pic3 },
    { id: 4, title: "خاکستر", price: 1000, count: 0, picture: pic4 },
    { id: 5, title: "خیابان تمساح ها", price: 1000, count: 0, picture: pic5 },
    { id: 6, title: "درسو اوزالا", price: 1000, count: 0, picture: pic6 },
    { id: 7, title: "زن پلید", price: 1000, count: 0, picture: pic7 },
    {
      id: 8,
      title: "سرگرمی در سرحد مرگ",
      price: 1000,
      count: 0,
      picture: pic8,
    },
    { id: 9, title: "شتابان زیستن", price: 1000, count: 0, picture: pic9 },
    { id: 10, title: "صومعه پارم", price: 1000, count: 0, picture: pic10 },
    { id: 11, title: "فرزندان من", price: 1000, count: 0, picture: pic11 },
    { id: 12, title: "لوئی لامبر", price: 1000, count: 0, picture: pic12 },
    { id: 13, title: "مادام بوآری", price: 1000, count: 0, picture: pic13 },
    { id: 14, title: "مشعل در گوش", price: 1000, count: 0, picture: pic14 },
    {
      id: 15,
      title: "معجزه در باد و باران",
      price: 1000,
      count: 0,
      picture: pic15,
    },
    { id: 16, title: "ژرمینال", price: 1000, count: 0, picture: pic16 },
    { id: 17, title: "کشتیبان واتیکان", price: 1000, count: 0, picture: pic17 },
    { id: 18, title: "کمدی درگذر زمان", price: 1000, count: 0, picture: pic18 },
    { id: 19, title: "کنفسیوس", price: 1000, count: 0, picture: pic19 },
  ],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.books[action.payload].count += 1;
    },
    decrement: (state, action) => {
      if (state.books[action.payload].count > 0) {
        state.books[action.payload].count -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = shopSlice.actions;

export default shopSlice.reducer;
