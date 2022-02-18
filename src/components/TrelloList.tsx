import React from "react";
import AddCardOrList from "./AddCardOrList";
import { ListTitle } from "./ListTitle";
import { TrelloCard } from "./TrelloCard";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface props {
  data: any;
  index: number;
}

export const TrelloList = (props: props) => {
  return (
    <Draggable draggableId={props.data.id} index={props.index}>
      {(provided) => (
        <List>
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ListTitle title={props.data.title} />
            <Droppable droppableId={props.data.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {props.data.cards.map((card: any, index: number) => (
                    <TrelloCard data={card} key={card.id} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCardOrList type="card" listId={props.data.id} />
          </Container>
        </List>
      )}
    </Draggable>
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
