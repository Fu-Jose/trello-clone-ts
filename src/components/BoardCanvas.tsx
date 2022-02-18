import React, { useState, useContext } from "react";
import { TrelloList } from "./TrelloList";
import styled from "styled-components";
import AddCardOrList from "./AddCardOrList";
import ContextAPI from "../context";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const BoardCanvas = () => {
  const { data, onDragEnd } = useContext(ContextAPI);
  console.log(data);
  // const onDragEnd = (result: any) => {
  //   const {
  //     source,
  //     source: { droppableId: srcDropId, index: srcIndex },
  //     destination,
  //     destination: { droppableId: destDropId, index: destIndex },
  //     draggableId,
  //     type,
  //   } = result;

  //   console.table([
  //     {
  //       srcDropId,
  //       destDropId,
  //       draggableId,
  //     },
  //   ]);

  //   console.table([
  //     {
  //       type,
  //       srcIndex,
  //       destIndex,
  //     },
  //   ]);

  //   if (!destination) {
  //     return;
  //   }

  //   if (type === "list") {
  //     const newListsIds = data.listsIds;
  //     newListsIds.splice(srcIndex, 1);
  //     newListsIds.splice(destIndex, 0, draggableId);
  //   }

  //   const srcList = data.lists[srcDropId];
  //   const destList = data.lists[destDropId];

  //   const draggingCard = srcList.cards.filter(
  //     (card: { id: string }) => card.id === draggableId
  //   )[0];

  //   if (srcDropId === destDropId) {
  //     srcList.cards.splice(srcIndex, 1);
  //     destList.cards.splice(destIndex, 0, draggingCard);
  //     setData({
  //       ...data,
  //       lists:{...data.lists,[srcList.id]:destList}
  //     })
  //   }
  // };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="boardCanvas" type="list" direction="horizontal">
        {(provided) => (
          <Canvas
            className=""
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.listsIds.map((id: string, index: number) => (
              <TrelloList data={data.lists[id]} key={id} index={index} />
            ))}
            {provided.placeholder}
            <List>
              <Container>
                <AddCardOrList type="list" listId={""} />
              </Container>
            </List>
          </Canvas>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardCanvas;

const Canvas = styled.div`
  display: flex;
  overflow-x: auto;
  // overflow-y: hidden;
  min-height: calc(100vh - 93px);
`;

const List = styled.div`
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(235, 236, 240);
  min-width: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;
