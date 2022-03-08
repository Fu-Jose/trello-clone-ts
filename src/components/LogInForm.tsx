import React from "react";
import styled, { css } from "styled-components";

const LogInForm = () => {
  const handleLogin = () => {
    const key = process.env.REACT_APP_API_KEY;
  };
  return (
    <Wrapper>
      <Container className="p-5">
        <Title>Log in to Trello</Title>
        <div>
          <form onSubmit={handleLogin}>
            <div className="d-flex flex-column">
              <Input type="text" placeholder="Enter email" />
              <Input type="password" placeholder="Enter password" />
            </div>
            <div className="d-flex">
              <Input submit type="submit" value="Log in" />
            </div>
          </form>
        </div>
        <hr />
        <List className="d-flex">
          <li>
            <a href="/resetpassword">Can't log in?</a>
          </li>
          <li>
            <a href="/register">Sign up for an account</a>
          </li>
        </List>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #fff;
  width: 400px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;

const Title = styled.h1`
  text-align: center;
  color: #5e6c84;
  font-size: 16px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0;
  list-style: none;
  & a {
    text-decoration: none;
  }
`;

const Input = styled.input`
  font-size: 14px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  border-radius: 3px;
  flex-grow: 1;
  padding: 0.5rem;
  margin: 10px;
  &:focus-visible {
    outline: 2px solid #4c9aff;
  }
  ${(props) =>
    props.submit &&
    css`
      background-color: #5aac44;
      color: #fff;
    `};
`;

export default LogInForm;