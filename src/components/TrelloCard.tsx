import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
interface props {
  data: any;
  index: number;
}

export const TrelloCard = (props: props) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(props.data.text);
  return (
    <>
      {open ? (
        <div className="d-flex">
          <Input
            autoFocus
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            onBlur={() => setOpen(false)}
            onKeyPress={(e: any) => e.key === "Enter" && setOpen(false)}
          />
        </div>
      ) : (
        <Draggable draggableId={props.data.id} index={props.index}>
          {(provided) => (
            <Card
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              onClick={() => setOpen(true)}
            >
              <CardText>{text}</CardText>
            </Card>
          )}
        </Draggable>
      )}
    </>
  );
};

const Card = styled.div`
  background-color: white;
  padding: 5px;
  margin: 0px 3px 3px 3px;
  border-radius: 5px;
`;

const CardText = styled.span`
  padding-left: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin: 0px 3px 3px 3px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;
