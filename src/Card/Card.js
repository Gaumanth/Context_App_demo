import React, { useContext } from "react";
import { MyContext } from "../Utils/MyContext";
const Card = () => {
  const { setCartItems } = useContext(MyContext);
  return (
    <div>
      <button onClick={() => setCartItems((prev) => prev + 1)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
