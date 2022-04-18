import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import Total from "../components/Total";
import Product from "../components/Product";

const productList = [
  { name: "android", price: 231, info: "product of google" },
  { name: "iphone", price: 784, info: "product of apple" },
  { name: "windows", price: 156, info: "product of microsoft" },
];

const ShoppingCart = () => {
  const [state, setState] = useState({
    total: 0,
    products: [],
  });

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, products: productList });
    }, 2000);
  }, []);

  const addProduct = (product) => {
    state.products.unshift(product);
    setState({ ...state, products: state.products });
  };

  const calculatePrice = (price) => {
    setState({ ...state, total: state.total + price });
  };

  const products =
    !state.products.length > 0 ? (
      <h2 className="mt-2">Loging...</h2>
    ) : (
      state.products.map((product, index) => (
        <Product
          key={index}
          product={product}
          calculatePrice={calculatePrice}
        />
      ))
    );

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <AddProduct addProduct={addProduct} />
        </Col>
        <Col md={4}>
          <Total totalPrice={state.total} />
        </Col>
      </Row>
      <Row>{products}</Row>
    </Container>
  );
};

export default ShoppingCart;
