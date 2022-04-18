import React, { Component } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

export class Body extends Component {
  render() {
    return (
      <div className="mainBody">
        <LeftSideBar />
        <RightSideBar />
      </div>
    );
  }
}

export default Body;
