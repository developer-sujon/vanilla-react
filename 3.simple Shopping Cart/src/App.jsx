import React, { useState } from "react";
import Shop from "./components/Shop";
import products from "./product";

function App() {
  const [priceInfo, setPriceInfo] = useState({
    setPrice: false,
    total: 0,
    item: 0,
  });

  const addToCart = (price) => {
    setPriceInfo({
      ...priceInfo,
      total: priceInfo.total + price,
      setPrice: true,
    });
  };

  return (
    <div
      style={{
        width: "1200px",
        margin: "auto",
        display: "flex",
        position: "relative",
      }}
    >
      <div>
        {products.map((product) => (
          <Shop
            key={product.id}
            title={product.title}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          background: "tomato",
          left: "68%",
          color: "white",
        }}
      >
        {priceInfo.setPrice && (
          <>
            <h2>Total Price ${priceInfo.total.toFixed(2)}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
