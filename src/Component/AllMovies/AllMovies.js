import React, { useEffect, useState } from "react";
import MovieCard from "../Shared/MovieCard/MovieCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=4fbde326a784030d0a948a46706dec39&language=en-US&page=1";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <div className="py-5 mt-5">
      <div className="container">
          <h1>All Movies</h1>
      </div>
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-12 g-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
