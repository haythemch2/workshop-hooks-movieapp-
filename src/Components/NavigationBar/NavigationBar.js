import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Button, Modal } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const NavigationBar = ({
  setSearchCondition,
  selectRating,
  setSelectRating,
  movies,
  setMovies,
}) => {
  const [show, setShow] = useState(false);
  const [movieToAdd, setMovieToAdd] = useState({
    name: "",
    description: "",
    posterurl: "",
    rating: 0,
  });
  const handleAdd = () => {
    setMovies([...movies, movieToAdd]);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  };
  return (
    <Navbar bg="dark" variant="dark" style={{ marginBottom: "4rem" }}>
      <Container>
        <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">Subscription</Nav.Link>
        </Nav>
        <Rating
          onClick={(x) => setSelectRating(x)}
          ratingValue={selectRating}
        />
        <Form.Control
          type="text"
          placeholder="Search movie"
          style={{ width: "300px", marginLeft: "2rem" }}
          onChange={(e) => setSearchCondition(e.target.value)}
        />
      </Container>
      <Button variant="dark" onClick={() => setShow(true)}>
        Add Movie
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Movie to Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Movie name</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, name: e.target.value })
              }
              type="text"
              placeholder="name"
            />
            <Form.Label>Movie description</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, description: e.target.value })
              }
              type="text"
              placeholder="description"
            />
            <Form.Label>Movie Poster URL</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, posterurl: e.target.value })
              }
              type="url"
              placeholder="poster URL"
            />
            <Form.Label>Movie rating</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, rating: e.target.value })
              }
              type="number"
              placeholder="rating"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAdd}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavigationBar;
