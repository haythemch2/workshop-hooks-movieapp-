import React from "react";
import { Card } from "react-bootstrap";
import { RatingView } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "22.5%", marginLeft: "1rem" }}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <RatingView ratingValue={movie.rating} stars={5} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
