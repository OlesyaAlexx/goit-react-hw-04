import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(input);
  };
  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="search" // додано ім'я для елемента форми
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={(e) => setInput(e.target.value)} // додано обробник події
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
