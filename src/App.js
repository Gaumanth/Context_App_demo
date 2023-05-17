import "./App.css";
import Header from "./Header/Header";
import Card from "./Card/Card";
import { MyContext } from "./Utils/MyContext";
import { useState } from "react";
import AppContext from "./Utils/MyContext";
function App() {
  return (
    <div className="App">
      <AppContext>
        <Header />
        <Card />
      </AppContext>
    </div>
  );
}

export default App;
