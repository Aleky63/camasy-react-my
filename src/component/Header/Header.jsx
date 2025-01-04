/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"
        alt="picture"
      />
    </header>
  );
}
export default Header;
