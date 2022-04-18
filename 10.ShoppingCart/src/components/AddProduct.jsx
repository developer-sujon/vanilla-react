import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddProduct = ({ addProduct }) => {
  const name = useRef(null);
  const price = useRef(null);
  const info = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: name.current.value,
      price: price.current.value,
      info: info.current.value,
    };

    if (name.current.value && price.current.value && info.current.value) {
      addProduct(product);
      name.current.value = "";
      price.current.value = "";
      info.current.value = "";
    } else {
      alert("Please Name Price and Info");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="productName">
        <Form.Label column sm="2">
          Product Name
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="Product Name" ref={name} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="productPrice">
        <Form.Label column sm="2">
          Product Price
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="Product Price" ref={price} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="productInfo">
        <Form.Label column sm="2">
          Product Info
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="Product Info" ref={info} />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProduct;
