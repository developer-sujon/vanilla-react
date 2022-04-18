import axios from "axios";
import React, { Component } from "react";
import Body from "./body/Body";
import Header from "./header/Header";
export const MainContext = React.createContext();

class Main extends Component {
  state = {
    searchTrem: "react js",
    videoLists: [],
  };

  handleSearch = (e) => {
    this.setState({ searchTrem: e.target.value });
  };

  getVedio = async (e) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${this.state.searchTrem}&type=video&key=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await response.data;
      this.setState({ videoLists: data.items });
    } catch (error) {}
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getVedio();
  };

  componentDidMount = () => {
    this.getVedio();
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          handleSearch: this.handleSearch,
          handleSubmit: this.handleSubmit,
          searchTrem: this.state.searchTrem,
          videoLists: this.state.videoLists,
        }}
      >
        <Header />
        <Body />
      </MainContext.Provider>
    );
  }
}

export default Main;
