import React, { useState } from "react";
import AddCardOrListText from "./AddCardOrListText";
import styled from "styled-components";

interface Props {
  type: string;
  listId: string;
}

const AddCardOrList: React.FC<Props> = ({ type, listId }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <AddCardOrListText type={type} listId={listId} setOpen={setOpen} />
      ) : (
        <Container onClick={() => setOpen(true)}>
          <Text>{type === "card" ? "+ Add a card" : "+ Add a list"}</Text>
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
