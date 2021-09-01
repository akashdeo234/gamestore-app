import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import "./TopHeader.css";
function TopHeader() {
  const [name, setName] = useState("Akash");
  const [isInput, setIsInput] = useState(false);
  return (
    <div className="top-header">
      <div className="container">
        <div className="left">
          <h1>Hi {name}</h1>
          <p>Welcome back, many new games are camed</p>
        </div>
        <div className="right">
          <SearchIcon
            className='search-icon'
            onClick={() => setIsInput(value => !value)}
            style={{ cursor: "pointer" }}
          />
          {isInput && <input type="text" className={`${isInput} ? 'search-field' : 'search-field-active' `} />}
          <AccountCircleIcon style={{ cursor: "pointer" }} className='profile-icon' />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
