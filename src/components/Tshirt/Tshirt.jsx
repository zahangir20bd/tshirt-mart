import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { _id, picture, name, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
