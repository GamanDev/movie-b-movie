import React, { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ showSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      {showSearch ? (
        <div className={style.header}>
          <Link to='/' className={style.header__name}>
            <h2>B-video</h2>
          </Link>
          <input
            type='text'
            placeholder='Search...'
            className={style.header__input}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      ) : (
        <div className={style.header}>
          <Link to='/' className={style.header__name}>
            <h2>B-video</h2>
          </Link>
          <Link to='/search'>
            <h2 className={style.header__button_back}>Back</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
