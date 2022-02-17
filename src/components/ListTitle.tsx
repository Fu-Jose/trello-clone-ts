import React, { useState } from "react";
import styled from "styled-components";

interface props {
  title: string;
}

export const ListTitle = (props: props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(props.title);
  return (
    <>
      {open ? (
        <Input
          autoFocus
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          onBlur={() => setOpen(false)}
          onKeyPress={(e: any) => e.key === "Enter" && setOpen(false)}
        />
      ) : (
        <Title onClick={() => setOpen(true)}>
          <TitleText>{title}</TitleText>
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

const Input = styled.input`
  margin: 3px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: inset 0 0 0 2px #0079bf;
  border: none;
  &:focus {
    outline: none;
  }
`;
