import React from "react";
import styles from "./MovieCard.css";

function MovieCard(props) {
  console.log(props);
  return (
    <div>
      {props.Movies.map((movie, key) => (
        <div container key={key} style={styles.movieListContainer}>
          <img src={movie.Poster} alt="movie" />
          <div container justifyContent="center" style={styles.text}>
            <h2>{movie.Title}</h2>
            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
