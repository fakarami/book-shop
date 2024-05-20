import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Raiting from "../pages/shopPage/Raiting";
import { decrement, increment } from "../../../shopSlice";

export default function CartPage() {
  const books = useSelector((state) => state.shop.books);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flexCard">
        {books.map((book, index) =>
          book.count > 0 ? (
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
                <Button onClick={() => dispatch(increment(index))} size="large">
                  +
                </Button>
                {book.count}
                <Button onClick={() => dispatch(decrement(index))} size="large">
                  -
                </Button>
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}
