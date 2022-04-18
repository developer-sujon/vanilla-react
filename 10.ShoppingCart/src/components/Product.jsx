import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";

const Product = ({ product, calculatePrice }) => {
  const [quantity, setQuantity] = useState(0);
  const [infoShow, setInfoShow] = useState(false);

  const addToCart = () => {
    setQuantity(quantity + 1);
    calculatePrice(parseInt(product.price));
  };

  const removeToCart = () => {
    setQuantity(quantity - 1);
    calculatePrice(parseInt(-product.price));
  };

  return (
    <Col className="my-3" md={12}>
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            {product.name} : ${product.price}
          </h4>
          {infoShow ? (
            <>
              {product.info}
              <Button
                onClick={() => setInfoShow(!infoShow)}
                size="sm"
                className="ms-2"
              >
                Minimize Info
              </Button>
            </>
          ) : (
            <Button
              variant="info"
              onClick={() => setInfoShow(!infoShow)}
              size="sm"
            >
              Show Info
            </Button>
          )}
        </div>
        <div>
          <h5>Quantity: {quantity}</h5>
          <Button variant="info" size="sm" className="me-2" onClick={addToCart}>
            ++
          </Button>
          <Button
            variant="info"
            size="sm"
            onClick={removeToCart}
            disabled={quantity <= 0}
          >
            --
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Product;
