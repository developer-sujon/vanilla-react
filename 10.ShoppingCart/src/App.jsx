import React, { Component } from "react";
import Header from "./layouts/header/Header";
import ShoppingCart from "./shopping/ShoppingCart";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ShoppingCart />
      </>
    );
  }
}

export default App;
