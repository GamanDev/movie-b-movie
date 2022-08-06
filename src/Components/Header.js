import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

const Header = ({ showSearch, handleSearch }) => {
  return (
    <div>
      {showSearch ? (
        <HeaderSearch handleSearch={handleSearch} />
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
