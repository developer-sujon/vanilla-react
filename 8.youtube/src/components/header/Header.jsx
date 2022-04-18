import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "./Search";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <i id="menu" className="material-icons">
            <MenuIcon />
          </i>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="header__search">
          <Search />
        </div>
        <div className="header__icons">
          <i className="material-icons display-this">
            <SearchIcon />
          </i>
          <i className="material-icons">
            <VideoCameraBackIcon />
          </i>
          <i className="material-icons">
            <AppsIcon />
          </i>
          <i className="material-icons">
            <NotificationsIcon />
          </i>
          <i className="material-icons display-this">
            <AccountCircleIcon />
          </i>
        </div>
      </div>
    );
  }
}

export default Header;
