import React, { useState, useContext } from "react";
import { TrelloList } from "./TrelloList";
import styled from "styled-components";
import AddCardOrList from "./AddCardOrList";
import ContextAPI from "../context";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const BoardCanvas: React.FC = () => {
  const { data, onDragEnd } = useContext(ContextAPI);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="boardCanvas" type="list" direction="horizontal">
        {(provided) => (
          <Canvas ref={provided.innerRef} {...provided.droppableProps}>
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
  // padding-left: 0px;
  border-radius: 5px;
`;
