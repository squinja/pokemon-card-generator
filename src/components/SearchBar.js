import React from "react";
import "./SearchBar.css";
import { useHistory } from "react-router";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <form
        className="search-bar-stack"
        action="/"
        method="get"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label htmlFor="header-search">
          <span className="visually-hidden search-label">Search Pokemon: </span>
        </label>
        <input
          value={searchQuery}
          onInput={setSearchQuery}
          type="text"
          id="header-search"
          placeholder="Search"
          name="s"
          className="search-input"
          style={{ fontFamily: "'Sophia Pro', sans-serif" }}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
