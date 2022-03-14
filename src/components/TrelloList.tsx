import React from "react";
import AddCardOrList from "./AddCardOrList";
import { ListTitle } from "./ListTitle";
import { TrelloCard } from "./TrelloCard";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

interface Props {
  data: any;
  index: number;
}

export const TrelloList: React.FC<Props> = ({ data, index }) => {
  // console.log(data);

  const { cards } = useSelector((state: IRootState) => state.board.board);
  const { loading } = useSelector((state: IRootState) => state.board);
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <List>
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ListTitle data={data} />
            <Droppable droppableId={data.id}>
              {(provided) => (
                <div
                  style={{ minHeight: "1px" }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {loading === false &&
                    cards.map((card: any, index: number) => {
                      if (data.id === card.idList)
                        return (
                          <TrelloCard
                            data={card}
                            list={data}
                            key={card.id}
                            index={index}
                          />
                        );
                    })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCardOrList type="card" listId={data.id} />
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
