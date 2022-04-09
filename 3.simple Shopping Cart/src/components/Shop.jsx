import React, { Component } from "react";

export class Shop extends Component {
  state = {
    active: false,
  };

  handleCart = () => {
    const { addToCart, price } = this.props;

    this.setState({ active: !this.state.active }, () =>
      addToCart(this.state.active ? price : -price),
    );
  };

  render() {
    return (
      <div className={this.state.active ? "active" : ""}>
        <h4>{this.props.title}</h4>
        <b style={{ display: "block" }}>{this.props.price}</b>
        <button onClick={this.handleCart}>
          {this.state.active ? "Remove Cart" : "Add Cart"}
        </button>
      </div>
    );
  }
}

export default Shop;
