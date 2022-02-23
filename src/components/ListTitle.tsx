import React, { useContext, useState } from "react";
import styled from "styled-components";
import ContextAPI from "../context";

interface Props {
  data: any;
}

export const ListTitle: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data.title);

  const { editTitle } = useContext(ContextAPI);

  return (
    <>
      {open ? (
        <Container>
          <Input
            autoFocus
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            onBlur={() => (editTitle(data.id, title), setOpen(false))}
            onKeyPress={(e: any) =>
              e.key === "Enter" && (editTitle(data.id, title), setOpen(false))
            }
          />
        </Container>
      ) : (
        <Title>
          <TitleText onClick={() => setOpen(true)}>{title}</TitleText>
          <i className="bx bx-dots-horizontal-rounded"></i>
        </Title>
      )}
    </>
  );
};

const Title = styled.div`
  display: flex;
  margin: 3px;
`;

const TitleText = styled.h5`
  flex-grow: 1;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  // margin: 3px;
  margin: 0px 0px 7px 0px;
  padding: 0px 3px;
`;

const Input = styled.input`
  // flex-grow: 1;
  width: 100%;
  font-weight: bold;
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: inset 0 0 0 2px #0079bf;
  border: none;
  &:focus {
    outline: none;
  }
`;
