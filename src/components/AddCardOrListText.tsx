import React, { useContext, useState } from "react";
import styled from "styled-components";
import ContextAPI from "../context";

interface Props {
  type: string;
  listId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCardOrListText: React.FC<Props> = ({ type, listId, setOpen }) => {
  const [text, setText] = useState("");
  const { addCard, addList } = useContext(ContextAPI);

  const handleCreate = () => {
    if (text === "") {
      return setOpen(false);
    }

    if (type === "card") {
      addCard(text, listId);
    } else {
      addList(text);
    }
    setText("");
    setOpen(false);
  };

  return (
    <>
      <Container>
        <TextField
          id="input"
          autoFocus
          rows={type === "card" ? "2" : "1"}
          value={text}
          onChange={(e: any) => setText(e.target.value)}
          onBlur={() => handleCreate()}
          placeholder={
            type === "card"
              ? "Enter a name for this card..."
              : "Enter a name for the new list..."
          }
        />
      </Container>
      <div className="d-flex justify-content-between">
        <div>
          <Button onClick={() => handleCreate()}>
            {type === "card" ? "Add Card" : "Add List"}
          </Button>
          <i className="bx bx-sm bx-x" onClick={() => setOpen(false)}></i>
        </div>
        {type === "card" && (
          <div className="align-self-center">
            <i className="bx bx-sm bx-dots-horizontal-rounded"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default AddCardOrListText;

const Container = styled.div`
  display: flex;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const TextField = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  font-weight: bold;
  flex-grow: 1;
  border: none;
  border-radius: 3px;
  &:focus-visible {
    outline: none;
  }
`;

const Button = styled.button`
  color: white;
  background-color: #026aa7;
  margin: 3px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  &:hover {
    opacity: 0.8;
  }
`;
