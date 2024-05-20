import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./shop.scss";
import Raiting from "./Raiting";
import { decrement, increment } from "../../../../shopSlice";
export default function Shop() {
  const books = useSelector((state) => state.shop.books);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flexCard">
        {books.map((book,index) => (
          <Card sx={{ maxWidth: 345 }} key={book.id}>
            <CardMedia
              component="img"
              alt={book.title}
              height="250"
              image={book.picture}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {book.title}
              </Typography>
              <hr />
              <Raiting />
            </CardContent>
            <CardActions>
              <Button
                onClick={() => dispatch(increment(index))}
                size="large"
              >
                +
              </Button>
              {book.count}
              <Button onClick={() => dispatch(decrement(index))} size="large">
                -
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
