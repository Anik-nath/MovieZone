import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4fbde326a784030d0a948a46706dec39&language=en-US&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div style={{ background: "rgba(0, 1, 10, 0.96)" }} className="py-5 mt-5">
      <div className="container">
        <div className="row text-light px-3 px-lg-0 px-md-0">
          <div className="col-lg-4 col-12 col-md-4">
            <img
              className="w-100 mb-3"
              src={`http://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt=""
            />
          </div>
          <div className="col-lg-8 col-12 col-md-8">
            <h2 className="text-light">{details.original_title}</h2>
            <p>Release Date : {details.release_date}</p>
            <p className="mb-5">Language : {details.original_language}</p>
            <div className="d-flex flex-lg-row flex-column  justify-content-between  gap-lg-4 border border-start-0 border-end-0 py-3">
              <div id="rating">
                <h6 className="d-flex align-items-center gap-2">
                  <i className="fas fa-star me-2 text-warning fs-6"></i>
                  <span>{details.vote_average}</span> / <sub>10</sub>
                </h6>
              </div>
              <div id="stars" className="d-flex align-items-center gap-2">
                <span className="lead">Rate This Movie :</span>{" "}
                <ReactStars
                  count={10}
                  onChange={ratingChanged}
                  size={26}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  color="#fff"
                  activeColor="gold"
                />
              </div>
            </div>

            <div id="overview" className="overview my-4">
              <h5 className="text-warning">Overview</h5>
              <p style={{ textAlign: "justify" }}>{details.overview}</p>
            </div>
            <div className="userReview">
              <h5 className="text-warning">Total Review</h5>
              <p>Total Votes : {details.vote_count}</p>
              <p>Popularity : {details.popularity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
