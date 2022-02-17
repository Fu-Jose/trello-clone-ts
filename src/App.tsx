import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import ContextAPI from "./context";
import { mockData } from "./data/mockdata";
import { v4 as uuid } from "uuid";

function App() {
  const [data, setData] = useState(mockData);

  const addCard = (text: string, listId: string) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      text: text,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    setData({
      ...data,
      lists: {
        ...data.lists,
        cards: list.cards,
        // Both should be equivalent
        // [listId]: list,
      },
    });
  };

  const addList = (text: string) => {
    const newListId = uuid();
    setData({
      lists: {
        ...data.lists,
        [newListId]: {
          id: newListId,
          title: text,
          cards: [],
        },
      },
      listsIds: [...data.listsIds, newListId],
    });
  };

  return (
    <ContextAPI.Provider value={{ addCard, addList, data }}>
      <div className="App">
        <Home />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
