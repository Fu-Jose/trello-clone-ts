import React, { useState } from "react";
import { TrelloList } from "./TrelloList";
import styled from "styled-components";
import AddCardOrList from "./AddCardOrList";
import { mockData } from "../data/mockdata";

export default function BoardCanvas() {
  const [data, setData] = useState(mockData);
  return (
    <Canvas>
      {data.listsIds.map((id: string) => {
        const list = data.lists[id];
        return <TrelloList data={list} key={id} />;
      })}
      <List>
        <Container>
          <AddCardOrList type="list" />
        </Container>
      </List>
    </Canvas>
  );
}

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
