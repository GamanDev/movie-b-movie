import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import style from "./Details.module.css";
import Header from "./Header";

const Details = () => {
  const { id } = useParams();
  const [movie] = useState(data.shows.find((show) => show.imdbID === id));
  console.log(movie);

  return (
    <div>
      <Header showSearch={false} />
      <div className={style.details}>
        <h2 className={style.details__item}>{movie.title}</h2>
        <div className={style.details__item}>({movie.year})</div>
        <img
          src={`/images/posters/${movie.poster}`}
          alt=''
          className={style.details__poster}
        />
        <p className={style.details__item}>{movie.description}</p>
      </div>
      <div className={style.trailer}>
        <iframe
          className={style.iframe}
          src={`https://www.youtube-nocookie.com/embed/${movie.trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder='0'
          allowFullScreen
          title={`Trailer for ${movie}`}
        />
      </div>
    </div>
  );
};

export default Details;
