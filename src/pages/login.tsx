import React from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";
import styled from "styled-components";

const login = () => {
  return (
    <>
      <Container>
        <Logo src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" />
        <section>
          <LogInForm />
        </section>
        <Footer />
      </Container>
      <Background />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 43px;
  margin: 50px;
`;

export default login;
