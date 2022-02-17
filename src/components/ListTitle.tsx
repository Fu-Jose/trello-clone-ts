import React from "react";
import styled from "styled-components";

interface props {
  title: string;
}

export const ListTitle = (props: props) => {
  return (
    <Title>
      <TitleText>{props.title}</TitleText>
      <i className="bx bx-dots-horizontal-rounded"></i>
    </Title>
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
