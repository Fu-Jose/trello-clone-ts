import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Boards from "../components/Boards";
import SideMenu from "../components/SideMenu";

const profile = () => {
  return (
    <div>
      <Header />
      <Container>
        <SideMenu />
        <Boards />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default profile;
