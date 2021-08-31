import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from "react";
import "./TopHeader.scss";
function TopHeader() {
  const [name, setName] = useState("Akash");
  return (
    <div className="top-header">
      <div className="container">
        <div className="left">
          <h1>Hi {name}</h1>
          <p>Welcome back, many new games are camed</p>
        </div>
        <div className="right">
          <SearchIcon style={{cursor:'pointer'}}/>
          <AccountCircleIcon style={{cursor:'pointer'}} />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
