import React, { useState, useContext } from "react";
import { TrelloList } from "./TrelloList";
import styled from "styled-components";
import AddCardOrList from "./AddCardOrList";
import ContextAPI from "../context";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const BoardCanvas: React.FC = () => {
  const { onDragEnd } = useContext(ContextAPI);
  const { board, loading } = useSelector((state: IRootState) => state.board);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="boardCanvas" type="list" direction="horizontal">
        {(provided) => (
          <Canvas ref={provided.innerRef} {...provided.droppableProps}>
            {loading === false ? (
              board.lists.map((list: any, index: number) => (
                <TrelloList data={list} key={index} index={index} />
              ))
            ) : (
              <>Loading...</>
            )}
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
