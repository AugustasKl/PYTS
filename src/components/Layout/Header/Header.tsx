import React from "react";
import classes from "./Header.module.css";
import headerLogo from "../../../assets/svg/headerLogo.svg";
const Header:React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={headerLogo} className={classes.logo} alt="Positive Yoga Logo" />
      <div className={classes.name}>
        <h6 className={classes.positive}>Positive</h6>
        <h6 className={classes.yoga}>YOGA</h6>
      </div>
    </header>
  );
};

export default Header;
