import { createContext } from "react";
import { useState } from "react";
export const MyContext = createContext();

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  return (
    <MyContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </MyContext.Provider>
  );
};
export default AppContext;
