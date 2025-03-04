import styles from "./SearchBar.css";
import { useState } from "react";
import React from "react";

function SearchBar(props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setValue(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a movie title....."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
