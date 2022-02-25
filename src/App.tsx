import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import ContextAPI from "./context";
import { mockData } from "./data/mockdata";
import { v4 as uuid } from "uuid";

export const App: React.FC = () => {
  const [data, setData] = useState(mockData);
  const [modal, setModal] = useState({
    data: {},
    list: "",
    number: null,
    setOpen: false,
  });

  const addCard = (text: string, listId: string) => {
    const newCardId = uuid();
    const newCard = {
      id: `_${newCardId}`,
      text: text,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
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

  const editTitle = (listId: string, title: string) => {
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: { ...data.lists[listId], title },
      },
    });
  };

  const editCard = (
    listId: string,
    cardId: string,
    index: number,
    text: string
  ) => {
    const newCard = {
      id: cardId,
      text,
    };
    const newList = data.lists[listId].cards;
    newList.splice(index, 1, newCard);
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: {
          ...data.lists[listId],
          cards: [...newList],
        },
      },
    });
  };

  const onDragEnd = (result: {
    source: { droppableId: string; index: number };
    destination: { droppableId: string; index: number };
    draggableId: string;
    type: string;
  }) => {
    const {
      source,
      source: { droppableId: srcDropId, index: srcIndex },
      destination,
      destination: { droppableId: destDropId, index: destIndex },
      draggableId,
      type,
    } = result;

    if (!destination) {
      return;
    }

    if (type === "list") {
      const newListsIds = data.listsIds;
      newListsIds.splice(srcIndex, 1);
      newListsIds.splice(destIndex, 0, draggableId);
      setData({
        ...data,
        listsIds: newListsIds,
      });
    } else {
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
        setData({
          ...data,
          lists: {
            ...data.lists,
            [srcList.id]: srcList,
            [destList.id]: destList,
          },
        });
      }
    }
  };

  return (
    <ContextAPI.Provider
      value={{
        addCard,
        addList,
        editTitle,
        editCard,
        onDragEnd,
        data,
        modal,
        setModal,
      }}
    >
      <div className="App">
        <Home />
      </div>
    </ContextAPI.Provider>
  );
};

export default App;
