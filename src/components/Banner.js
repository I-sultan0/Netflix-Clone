import React, { useState, useEffect } from "react";
import classes from "./Banner.module.css";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner_contents}>
        <h1 className={classes.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.banner_buttons}>
          <button className={classes.banner_button}>Play</button>
          <button className={classes.banner_button}>My List</button>
        </div>
        <h1 className={classes.banner_description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={classes.fade_bottom} />
    </header>
  );
};

export default Banner;
