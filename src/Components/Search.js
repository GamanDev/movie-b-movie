import React, { useEffect, useState } from "react";
import data from "../../data.json";
import Header from "./Header";
import style from "./Search.module.css";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [shows] = useState(data.shows);
  const [search, setSearch] = useState(props.search);

  function handleSearch(text) {
    setSearch(text);
  }

  console.log(data.shows);
  return (
    <div>
      <Header showSearch={true} handleSearch={handleSearch} />
      <div className={style.list}>
        {search
          ? shows
              .filter(
                (show) =>
                  `${show.title} ${show.description}`
                    .toUpperCase()
                    .indexOf(search.toUpperCase()) >= 0
              )
              .map((show) => {
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
              })
          : shows.map((show) => {
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
            })}
      </div>
    </div>
  );
};

export default Search;
