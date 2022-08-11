import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Search.module.css";

const SearchResult = memo(({ show }) => {
  useEffect(() => {
    console.log("Child SearchResult render");
  });
  return (
    <Link to={`/search/${show.imdbID}`}>
      <div key={show.imdbID} className={style.list__items}>
        <img
          src={`/images/posters/${show.poster}`}
          alt='poster'
          className={style.list__poster}
          onClick={() => console.log(show.imdbID)}
        />
        <div className={style.list__description}>
          <h3>{show.title}</h3>
          <p>({show.year})</p>
          <p>{show.description}</p>
        </div>
      </div>
    </Link>
  );
});

export default SearchResult;
