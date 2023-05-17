import React, { useContext } from "react";
import "./Header.css";
import { MyContext } from "../Utils/MyContext";
const Header = () => {
  const { cartItems } = useContext(MyContext);
  return (
    <div className="header">
      <span className="totalCartItems">{cartItems}</span>
    </div>
  );
};

export default Header;
