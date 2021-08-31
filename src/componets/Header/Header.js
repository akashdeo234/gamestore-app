import React from "react";
import "./header.scss";
import logo from "./logo.svg";
import homeLogo from "./home-logo.svg";
import wishListLogo from "./wishlist-logo.svg";
import accountLogo from "./acc-logo.svg";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo images" className="logo" />

        <nav>
          <div className="flex-wrapper">
            <img src={homeLogo} alt="homelogo" className="home-logo"></img>
            <img
              src={wishListLogo}
              alt="wishListlogo"
              className="wishlist-logo"
            ></img>
            <img
              src={accountLogo}
              alt="accountlogo"
              className="account-logo"
            ></img>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
