import React from "react";
import style from "../../CSS/style.module.css";
import InTheater from "../InTheater/InTheater";

const Home = () => {
  return (
    <div style={{ background: "rgba(0, 1, 10, 0.96)" }}>
      <div className={style.banner}>
        <div className="container text-light h-100 d-flex flex-column align-items-center justify-content-center align-item-center text-center">
          <h1 className="display-2 mb-0">Popular Movies</h1>
          <p className="lead py-3">
            Best movie website for movie reviews, movie streaming,
            movie directory, and movie promotion websites.
          </p>
          <button className={style.button}>
            <i className="fas fa-play-circle me-2 py-2"></i>
            Playlist
          </button>
        </div>
      </div>
      {/* in theater */}
      <div className="container">
        <InTheater></InTheater>
      </div>
    </div>
  );
};

export default Home;
