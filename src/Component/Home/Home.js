import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../CSS/style.module.css";
import InTheater from "../InTheater/InTheater";
import OnTvs from "../OnTvs/OnTvs";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div style={{ background: "rgba(0, 1, 10, 0.96)" }}>
      <div className={style.banner}>
        <div className="container text-light h-100 d-flex flex-column align-items-center justify-content-center align-item-center text-center">
          <h1 data-aos="fade-in" className="display-2 mb-0">Popular Movies</h1>
          <p data-aos="fade-in" className="lead py-3">
            Best movie website for movie reviews, movie streaming, movie
            directory, and movie promotion websites.
          </p>
          <Link to="/allmovies">
          <button data-aos="zoom-in" className={style.button}>
            <i className="fas fa-play-circle me-2 py-2"></i>
            Watch Now
          </button>
          </Link>
        </div>
      </div>
      {/* in theater */}
      <div className="container">
        <InTheater></InTheater>
        <OnTvs></OnTvs>
      </div>
    </div>
  );
};

export default Home;
