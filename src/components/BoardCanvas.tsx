import React, { useState, useContext } from "react";
import { TrelloList } from "./TrelloList";
import styled from "styled-components";
import AddCardOrList from "./AddCardOrList";
import ContextAPI from "../context";

const BoardCanvas = () => {
  const { data } = useContext(ContextAPI);
  return (
    <Canvas>
      {data.listsIds.map((id: string) => {
        const list = data.lists[id];
        return <TrelloList data={list} key={id} />;
      })}
      <List>
        <Container>
          <AddCardOrList type="list" listId={""} />
        </Container>
      </List>
    </Canvas>
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
