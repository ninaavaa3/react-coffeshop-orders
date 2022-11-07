import React from "react";
import classes from './Header.module.css';

import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className="headerh1">ReactCoffe`</h1>
        <HeaderCartButton />
      </header>


    </div>
  )

}

export default Header;