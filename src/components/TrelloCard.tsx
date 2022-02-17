import React, { useState } from "react";
import styled from "styled-components";
interface props {
  data: any;
}

export const TrelloCard = (props: props) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(props.data.text);
  return (
    <>
      {open ? (
        <Input
          autoFocus
          value={text}
          onChange={(e: any) => setText(e.target.value)}
          onBlur={() => setOpen(false)}
          onKeyPress={(e: any) => e.key === "Enter" && setOpen(false)}
        />
      ) : (
        <Card onClick={() => setOpen(true)}>
          <CardText>{text}</CardText>
        </Card>
      )}
    </>
  );
};

const Card = styled.div`
  background-color: white;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
`;

const CardText = styled.span`
  padding: 5px;
`;

const Input = styled.input`
  padding: 3px 8px;
  margin: 3px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;
