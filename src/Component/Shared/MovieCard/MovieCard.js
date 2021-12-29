import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = (props) => {
  const {
    original_title,
    overview,
    vote_average,
    release_date,
    poster_path,
    backdrop_path,
  } = props.movie;
  return (
    <div>
      <Card className="border-0 shadow-lg">
        <Card.Img
          className="position-relative"
          variant="top"
          src={`http://image.tmdb.org/t/p/w500${poster_path}`}
        />
        <div
          style={{ background: "rgba(0, 0, 50, 0.40)" }}
          className="position-absolute h-100 w-100"
        ></div>
        <Card.Body className="position-absolute text-light bottom-0">
          <Card.Title className="fs-6">{original_title} </Card.Title>
          <Card.Text>
            <h6>
              <i className="fas fa-star me-2 text-warning fs-6"></i>
              <span>{vote_average}</span> / <sub>10</sub>
            </h6>
            <span className="fs-6">Release: {release_date}</span>
            <span></span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
