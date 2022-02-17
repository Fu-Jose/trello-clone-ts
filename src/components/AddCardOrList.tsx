import React, { useState } from "react";
import AddCardOrListText from "./AddCardOrListText";
import styled from "styled-components";

interface props {
  type: string;
  // setOpen: boolean;
}

const AddCardOrList = (props: props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <AddCardOrListText type={props.type} setOpen={setOpen} />
      ) : (
        <Container onClick={() => setOpen(true)}>
          <Text>{props.type === "card" ? "+ Add a card" : "+ Add a list"}</Text>
        </Container>
      )}
    </div>
  );
};

export default AddCardOrList;

const Container = styled.div`
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Text = styled.span`
  font-weight: bold;
  padding: 5px;
`;
