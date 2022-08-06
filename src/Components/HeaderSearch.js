import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const HeaderSearch = ({ handleSearch }) => {
  return (
    <div className={style.header}>
      <Link to='/' className={style.header__name}>
        <h2>B-video</h2>
      </Link>
      <input
        type='text'
        placeholder='Search...'
        className={style.header__input}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default HeaderSearch;
