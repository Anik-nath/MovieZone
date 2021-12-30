import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";

const MovieCard = (props) => {
  const { id, original_title, vote_average, release_date, poster_path } =
    props.movie;

    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`/moviedetails/${id}`}>
        <Card data-aos="fade-in" className="border-0 shadow-lg">
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
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
