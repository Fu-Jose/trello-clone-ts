import React, { useContext, useState } from "react";
import styled from "styled-components";
import ContextAPI from "../context";

interface props {
  type: string;
  listId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCardOrListText = (props: props) => {
  const [text, setText] = useState("");

  const { addCard, addList } = useContext(ContextAPI);

  const handleCreate = () => {
    if (text !== "") {
      if (props.type === "card") {
        addCard(text, props.listId);
      } else {
        addList(text);
      }
      setText("");
      props.setOpen(false);
    }
    // REFACTOR THIS ?
    // {
    //   text !== "" && props.type == "card"
    //     ? addCard(text, props.listId)
    //     : addList(text);
    // }
  };

  return (
    <>
      <Container>
        <TextField
          id="input"
          autoFocus
          rows={props.type === "card" ? "2" : "1"}
          value={text}
          onChange={(e: any) => setText(e.target.value)}
          // onBlur={() => props.setOpen(false)}
          placeholder={
            props.type === "card"
              ? "Enter a name for this card..."
              : "Enter a name for the new list..."
          }
        />
      </Container>
      <div className="d-flex justify-content-between">
        <div>
          <Button onClick={() => handleCreate()}>
            {props.type === "card" ? "Add Card" : "Add List"}
          </Button>
          <i className="bx bx-sm bx-x" onClick={() => props.setOpen(false)}></i>
        </div>
        {props.type === "card" && (
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
