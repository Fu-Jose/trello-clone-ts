import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import ContextAPI from "../context";

interface Props {
  data: any;
  list: string;
  index: number;
}

export const TrelloCard: React.FC<Props> = ({ data, list, index }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(data.text);

  const edit = () => {
    data.text = text;
    setOpen(false);
  };

  const { setModal } = useContext(ContextAPI);
  const modalSwitch = () => {
    return setModal({ data: data, list: list, index: index });
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
        <>
          <Draggable draggableId={data.id} index={index}>
            {(provided) => (
              <Card
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
                data-bs-toggle="modal"
                data-bs-target={`#${data.id}`}
                onMouseUp={modalSwitch}
              >
                <CardText>{text}</CardText>
                <i
                  className="bx bx-edit d-none align-self-start"
                  onMouseDown={() => setOpen(true)}
                ></i>
              </Card>
            )}
          </Draggable>
        </>
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
  &:focus-visible {
    outline: none !important;
  }
`;

const CardText = styled.span`
  flex-grow: 1;
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
