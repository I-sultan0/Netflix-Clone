import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={[classes.navbar, show && classes.navbar_black].join(" ")}>
      <img className={classes.navbar_logo} src={Logo} alt="Netflix Logo" />
      <img
        className={classes.navbar_avatar}
        src="https://imgs.search.brave.com/FG75L8fOc2sNGc7Uf1tl9CrwqytX_DZn5HfQhi3bi6Q/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UzLzk0/LzMwL2UzOTQzMDQz/NGQyYjgyMDcxODhm/ODgwYWM2NmM2NDEx/LnBuZw"
        alt="Netflix Profile Icon"
      />
    </div>
  );
};

export default Navbar;
