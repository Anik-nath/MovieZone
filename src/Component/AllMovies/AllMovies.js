import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import MovieCard from "../Shared/MovieCard/MovieCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=4fbde326a784030d0a948a46706dec39&language=en-US&page=1";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, []);
  return (
    <div style={{ background: "rgba(0, 1, 10, 0.96)" }} className="py-5 mt-5">
      <div className="container">
        <div className="pt-5 d-flex">
          <select className="bg-dark text-white py-2 border-0 me-1 px-5">
            <option>TV Shows</option>
            <option>Movies</option>
            <option>Musics</option>
            <option>Drama</option>
          </select>
          <input
            className="w-100 bg-dark text-white py-2 border-0 px-3"
            type="text"
            placeholder="Search for more movies"
          />
        </div>
        <div className="d-flex justify-content-end align-items-center text-white py-4 gap-4">
          <span>Follow Us :</span>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <div className="container">
        {isloading ? (
          <div className="text-center">
            <Spinner animation="grow" variant="light" />
          </div>
        ) : (
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-12 g-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
