import React from "react";
import styled from "styled-components";

export const TrelloCard = () => {
  return (
    <Card>
      <CardText>Comprar las compras</CardText>
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
