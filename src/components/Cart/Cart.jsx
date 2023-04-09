import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
