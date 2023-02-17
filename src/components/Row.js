import React, { useState, useEffect } from "react";
import axios from "../axios";
import classes from "./Row.module.css";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchURL]);

  // console.table(movies);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.row_posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={[
              classes.row_poster,
              isLargeRow && classes.row_posterLarge,
            ].join(" ")}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
