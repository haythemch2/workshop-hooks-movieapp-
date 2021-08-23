import React from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchCondition, selectRating }) => {
  return (
    <Container style={{ display: "flex", flexWrap: "wrap" }}>
      {movies
        .filter(
          (movie) =>
            movie.name.toLowerCase().includes(searchCondition.toLowerCase()) &&
            movie.rating >= selectRating
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </Container>
  );
};

export default MovieList;
