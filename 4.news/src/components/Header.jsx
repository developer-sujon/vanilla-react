//External Lib Import
import React, { Component } from "react";

//Internal Lib Import
import { newsCategory } from "../news";

export class Header extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      if (!e.target.value.length) {
        alert("write something");
      } else {
        this.props.search(this.state.searchTerm);
      }
    }
  };

  render() {
    const { category, changeCategory } = this.props;

    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster Headlines
        </h1>

        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter To Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />

        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => (
              <button
                className={`btn btn-sm mr-2 mb-2 ${
                  item === category ? "btn-warning" : "btn-light"
                }`}
                onClick={() => changeCategory(newsCategory[item])}
              >
                {`# ${newsCategory[item]}`}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

export default Header;
