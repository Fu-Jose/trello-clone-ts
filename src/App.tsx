import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextAPI from "./context";
import { mockData } from "./data/mockdata";
import { v4 as uuid } from "uuid";

import { Provider } from "react";

const HomePage = React.lazy(() => import("./pages/home"));
const LoginPage = React.lazy(() => import("./pages/login"));
const ProfilePage = React.lazy(() => import("./pages/profile"));

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

  const addComment = (card: any, list: any, text: string) => {
    const newComment = {
      text,
      creator: "Juan Jose",
      creationDate: "new Date()",
    };
    const oldComments = data.lists[list.id].cards.find(
      (id: string) => card.id
    ).comments;
    const newComments = [...oldComments, newComment];
    const newCard = {
      ...card,
      comments: newComments,
    };
    const cards = data.lists[list.id].cards;
    const cardIndex = cards.findIndex((arr: any) => arr.id === card.id);
    cards.splice(cardIndex, 1, newCard);
    setData({
      ...data,
      lists: {
        ...data.lists,
        [list.id]: {
          ...data.lists[list.id],
          cards: [...cards],
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
    <Router>
      <ContextAPI.Provider
        value={{
          addCard,
          addList,
          editTitle,
          editCard,
          addComment,
          onDragEnd,
          data,
          modal,
          setModal,
        }}
      >
        <div className="App">
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Suspense>
        </div>
      </ContextAPI.Provider>
    </Router>
  );
};

export default App;
