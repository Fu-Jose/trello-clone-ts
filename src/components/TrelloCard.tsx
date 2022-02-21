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

  const edit = () => {
    props.data.text = text;
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div className="d-flex">
          <Input
            autoFocus
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            onBlur={() => edit()}
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
            >
              <CardText>{text}</CardText>
              <i
                className="bx bx-edit d-none align-self-end"
                onClick={() => setOpen(true)}
              ></i>
            </Card>
          )}
        </Draggable>
      )}
    </>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  margin: 0px 3px 3px 3px;
  border-radius: 5px;
  &:hover i {
    display: block !important;
  }
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
