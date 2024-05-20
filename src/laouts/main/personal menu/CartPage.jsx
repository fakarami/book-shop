import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Raiting from "../pages/shopPage/Raiting";

export default function CartPage() {
  const books = useSelector((state) => state.shop.books);
  return (
    <>
      <div className="flexCard">
        {books.map((book) =>
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
                <Button size="large">+</Button>
                {book.count}
                <Button size="large">-</Button>
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
