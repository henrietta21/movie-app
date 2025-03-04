import { useState } from "react";
import axios from "axios";
import "./Home.css";
import { useEffect } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState(""); // Default query
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "da88be3";

  const getMovieRequest = async () => {
    if (!searchInput.trim()) {
      setMovie(null);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    setMovie(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchInput}`
      );
      if (response.data.Response === "True") {
        setMovie(response.data);
      } else {
        setError("Movie not found!");
      }
    } catch (err) {
      setError("Failed to fetch movie data.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter movie title..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={getMovieRequest}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {movie && (
        <div className="movie-card">
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h2>{movie.Title}</h2>
          <p>
            {movie.Year} | {movie.Genre}
          </p>
          <p className="rating">IMDb Rating: {movie.imdbRating}</p>
          <p>{movie.Plot}</p>
        </div>
      )}
    </div>
  );
}
