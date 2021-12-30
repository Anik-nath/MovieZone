import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import style from "../../CSS/style.module.css";
const InTheater = () => {
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
    <div className="py-5">
      <h3 className="display-6 text-light text-center my-5">
        Movies In Theater
      </h3>
      {isloading ? (
        <div className="text-center">
          <Spinner animation="grow" variant="light" />
        </div>
      ) : (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-12 g-4">
          {movies.slice(8,12).map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      )}
      <div className="text-center mt-5">
        <Link to="/allmovies">
          <button className={style.button}>Movies List</button>
        </Link>
      </div>
    </div>
  );
};

export default InTheater;
