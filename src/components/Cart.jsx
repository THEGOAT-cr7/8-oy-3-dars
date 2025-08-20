import React from "react";

function Cart({ dessert }) {
  console.log(dessert);
  return (
    <div>
      <h1>{dessert.category}</h1>
    </div>
  );
}

export default Cart;
