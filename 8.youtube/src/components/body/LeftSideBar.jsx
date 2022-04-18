import React, { Component } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import HistoryIcon from "@mui/icons-material/History";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export class LeftSideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <i className="material-icons">
              <HomeIcon />
            </i>
            <span>Home</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">
              <LocalFireDepartmentIcon />
            </i>
            <span>Trending</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">
              <SubscriptionsIcon />
            </i>
            <span>Subcriptions</span>
          </div>
        </div>
        <hr />
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <i className="material-icons">
              <LibraryAddCheckIcon />
            </i>
            <span>Library</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">
              <HistoryIcon />
            </i>
            <span>History</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">
              <PlayArrowIcon />
            </i>
            <span>Your Videos</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">
              <WatchLaterIcon />
            </i>
            <span>Watch Later</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">
              <ThumbUpIcon />
            </i>
            <span>Liked Videos</span>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default LeftSideBar;
