import React, { Component } from "react";
import Header from "./layouts/header/Header";
import Todos from "./todo/Todos";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Todos />
      </>
    );
  }
}

export default App;
