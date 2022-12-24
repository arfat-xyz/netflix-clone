import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./Banner.css";
import requests from "./Requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);
  // console.log(movie);

  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movie && movie.backdrop_path
          }")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <div className="banner__description">
            {truncate(movie?.overview, 150)}
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
