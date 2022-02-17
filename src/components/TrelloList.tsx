import React from "react";
import AddCardOrList from "./AddCardOrList";
import { ListTitle } from "./ListTitle";
import { TrelloCard } from "./TrelloCard";
import styled from "styled-components";

interface props {
  data: any;
}

export const TrelloList = (props: props) => {
  return (
    <List>
      <Container>
        <ListTitle title={props.data.title} />
        {props.data.cards.map((card: any) => (
          <TrelloCard data={card} key={card.id} />
        ))}
        <AddCardOrList type="card" listId={props.data.id} />
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
