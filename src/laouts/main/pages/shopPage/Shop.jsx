import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./shop.scss";
import Raiting from "./Raiting";
export default function Shop() {
  const books = useSelector((state) => state.shop.books);
  return (
    <>
      <div className="flexCard">
        {books.map((book) => (
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
        ))}
      </div>
    </>
  );
}
