import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.search}>
      <h2 className={style.search__name_blue}>B-Video</h2>
      <form action='' className={style.search__form}>
        <label htmlFor='Search'></label>
        <input
          type='text'
          placeholder='Search...'
          className={style.search__input}
        />
      </form>
      <Link to='/search' className={style.search_button}>
        or Browse All
      </Link>
    </div>
  );
};

export default Landing;
