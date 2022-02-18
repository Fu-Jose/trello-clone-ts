import React, { useState, useContext } from "react";
import { TrelloList } from "./TrelloList";
import styled from "styled-components";
import AddCardOrList from "./AddCardOrList";
import ContextAPI from "../context";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const BoardCanvas = () => {
  const { data } = useContext(ContextAPI);
  const onDragEnd = (result: any) => {
    console.log(result);
  };
  return (
    // <Canvas>
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
    // </Canvas>
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
