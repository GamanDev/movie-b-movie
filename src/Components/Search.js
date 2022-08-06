import React, { useMemo, useState } from "react";
import data from "../../data.json";
import Header from "./Header";
import style from "./Search.module.css";

import SearchResult from "./SearchResult";

const Search = (props) => {
  const [shows] = useState(data.shows);
  const [search, setSearch] = useState(props.search);
  console.log(shows);

  function handleSearch(text) {
    setSearch(text);
  }

  const filteredShow = useMemo(() => {
    return shows.filter(
      (show) =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(search.toUpperCase()) >= 0
    );
  }, [search]);

  return (
    <div>
      <Header showSearch={true} handleSearch={handleSearch} />
      <div className={style.list}>
        {search
          ? filteredShow.map((show) => {
              return <SearchResult show={show} />;
            })
          : shows.map((show) => {
              return <SearchResult show={show} />;
            })}
      </div>
    </div>
  );
};

export default Search;
