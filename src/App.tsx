import React from "react";
import "./App.css";
import Home from "./pages/home";
import ContextAPI from "./context";

function App() {
  const addCard = () => {
    console.log("CARD");
  };
  const addList = () => {
    console.log("LIST");
  };
  return (
    <ContextAPI.Provider value={{ addCard, addList }}>
      <div className="App">
        <Home />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
