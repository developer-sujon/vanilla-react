import React from "react";
const Total = ({ totalPrice }) => {
  const total = totalPrice && totalPrice.toFixed(2);
  const tax = totalPrice && (totalPrice * 0.15).toFixed(2);
  const totalInc = (+total + +tax).toFixed(2);

  return (
    <div className="d-flex justify-content-between">
      <div>
        <h4>Total Price: </h4>
        <h4>Tax (15)% : </h4>
        <h4>Total Inc Tax: </h4>
      </div>
      <div>
        <h4>${total}</h4>
        <h4>${tax}</h4>
        <h4>${totalInc}</h4>
      </div>
    </div>
  );
};

export default Total;
