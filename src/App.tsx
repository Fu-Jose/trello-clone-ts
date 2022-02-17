import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import ContextAPI from "./context";
import { mockData } from "./data/mockdata";

function App() {
  const addCard = () => {
    console.log("CARD");
  };
  const addList = () => {
    console.log("LIST");
  };
  const [data, setData] = useState(mockData);
  return (
    <ContextAPI.Provider value={{ addCard, addList, data }}>
      <div className="App">
        <Home />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
