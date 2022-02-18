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

  const onDragEnd = (result: any) => {
    const {
      source,
      source: { droppableId: srcDropId, index: srcIndex },
      destination,
      destination: { droppableId: destDropId, index: destIndex },
      draggableId,
      type,
    } = result;

    console.table([
      {
        srcDropId,
        destDropId,
        draggableId,
      },
    ]);

    console.table([
      {
        type,
        srcIndex,
        destIndex,
      },
    ]);

    if (!destination) {
      return;
    }

    if (type === "list") {
      const newListsIds = data.listsIds;
      newListsIds.splice(srcIndex, 1);
      newListsIds.splice(destIndex, 0, draggableId);
    }

    const srcList = data.lists[srcDropId];
    const destList = data.lists[destDropId];

    const draggingCard = srcList.cards.filter(
      (card: { id: string }) => card.id === draggableId
    )[0];

    if (srcDropId === destDropId) {
      srcList.cards.splice(srcIndex, 1);
      destList.cards.splice(destIndex, 0, draggingCard);
      setData({
        ...data,
        lists: { ...data.lists, [srcList.id]: destList },
      });
    } else {
      srcList.cards.splice(srcIndex, 1);
      destList.cards.splice(destIndex, 0, draggingCard);
      // setData({
      //   ...data.lists,
      //   [srcList.id]: srcList,
      //   [destList.id]: destList,
      // });
    }
  };

  return (
    <ContextAPI.Provider value={{ addCard, addList, onDragEnd, data }}>
      <div className="App">
        <Home />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
