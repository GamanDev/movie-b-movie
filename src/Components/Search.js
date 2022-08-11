import React, { useMemo, useState } from "react";
import data from "../../data.json";
import Header from "./Header";
import style from "./Search.module.css";

import SearchResult from "./SearchResult";

const Search = (props) => {
  const [shows] = useState(data.shows);
  const [search, setSearch] = useState(props.search);

  console.log("Parent Search Component");

  const searchShows = useMemo(() => {
    const searchUpperCased = search.toUpperCase();
    return shows.filter(
      (show) =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchUpperCased) >= 0
    );
  }, [search, shows]);
  // indexof => includes

  function handleSearch(text) {
    setSearch(text);
  }
  return (
    <div>
      <Header showSearch={true} handleSearch={handleSearch} />
      <div className={style.list}>
        {search
          ? searchShows.map((show) => {
              return <SearchResult key={show.imdbID} show={show} />;
            })
          : shows.map((show) => {
              return <SearchResult key={show.imdbID} show={show} />;
            })}
      </div>
    </div>
  );
};

export default Search;
