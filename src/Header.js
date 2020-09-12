import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ color: "white" }} />
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          style={{
            flex: 1,
            border: "none",
            padding: "8.3px 20px",
            width: "30vw",
            backgroundColor: "#131313",
            color: "white",
            fontSize: "16px",
          }}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon
            className="header__inputButton"
            style={{ color: "#9b9b9b", padding: "4px 10px" }}
          />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon style={{ color: "white", marginLeft: "10px" }} />
        <AppsIcon style={{ color: "white", marginLeft: "20px" }} />
        <NotificationsIcon style={{ color: "white", marginLeft: "20px" }} />
        <Avatar
          style={{ height: "30px", width: "30px", marginLeft: "20px" }}
          className="avatar"
          src="https://lh3.googleusercontent.com/a-/AOh14GhFApbsFe2s2E2H0CL1Nr5WjNXrxPRtfsleJopI=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="Sanskar Tiwari"
        />
      </div>
    </div>
  );
}

export default Header;
