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
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
    </header>
  );
};

export default Banner;
