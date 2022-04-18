import React, { Component } from "react";
import Header from "./layouts/header/Header";
import SimpleForm from "./form/Form";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SimpleForm />
      </>
    );
  }
}

export default App;
