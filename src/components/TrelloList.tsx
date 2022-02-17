import React from "react";
import AddCardOrList from "./AddCardOrList";
import { ListTitle } from "./ListTitle";
import { TrelloCard } from "./TrelloCard";
import styled from "styled-components";

interface props {
  data: any;
}

export const TrelloList = (props: props) => {
  // console.log(props.data.cards);

  return (
    <List>
      <Container>
        <ListTitle title={props.data.title} />
        {props.data.cards.map((id: string) => {
          // const card = props.data.cards;
          // console.log(id, "SCEMO");
          return <TrelloCard data={id} key={id} />;
        })}
        <AddCardOrList type="card" />
      </Container>
    </List>
  );
};

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
