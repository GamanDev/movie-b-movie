import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import style from "./Details.module.css";
import Header from "./Header";

const Details = () => {
  const { id } = useParams();
  const [title] = useState(data.shows.filter((show) => show.imdbID === id));
  console.log(title);
  return (
    <div>
      <Header showSearch={false} />
      <div className={style.details}>
        <h2 className={style.details__item}>{title[0].title}</h2>
        <div className={style.details__item}>({title[0].year})</div>
        <img
          src={`/images/posters/${title[0].poster}`}
          alt=''
          className={style.details__poster}
        />
        <p className={style.details__item}>{title[0].description}</p>
      </div>
      <div className={style.trailer}>
        <iframe
          className={style.iframe}
          src={`https://www.youtube-nocookie.com/embed/${title[0].trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder='0'
          allowFullScreen
          title={`Trailer for ${title}`}
        />
      </div>
    </div>
  );
};

export default Details;
