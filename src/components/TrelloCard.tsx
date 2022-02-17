import React from "react";
import styled from "styled-components";
interface props {
  data: any;
}

export const TrelloCard = (props: props) => {
  return (
    <Card>
      <CardText>{props.data.text}</CardText>
    </Card>
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
