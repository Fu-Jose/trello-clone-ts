import React from "react";
import styled from "styled-components";

const Boards = () => {
  return (
    <Wrapper>
      <Container>
        <h3>YOUR WORKSPACES</h3>
        <div>
          <Menu>
            <div></div>
            <h3>WORKSPACE</h3>
            <div className="d-flex flex-wrap">
              <a>
                <span>
                  <i className="bx bx-bar-chart-square bx-rotate-180"></i>
                </span>
                <span>Boards</span>
              </a>
              <a>
                <span>
                  <i className="bx bx-customize"></i>
                </span>
                <span>Views</span>
              </a>
              <a>
                <span>
                  <i className="bx bx-group"></i>
                </span>
                <span>Members</span>
              </a>
              <a>
                <span>
                  <i className="bx bx-cog"></i>
                </span>
                <span>Settings</span>
              </a>
              <a>
                <span>
                  <i className="bx bx-briefcase"></i>
                </span>
                <span>Upgrade</span>
              </a>
            </div>
          </Menu>
          <div>
            <List>
              <li>
                <a
                  href="/board_id"
                  style={{
                    backgroundImage:
                      "url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x303/c07baf307c2c535f2c72110b18fd7519/photo-1632343095305-923ef5269761.jpg')",
                  }}
                >
                  <span></span>
                  <div className="px-2 py-1">Board name</div>
                </a>
              </li>
            </List>
          </div>
        </div>
      </Container>
      <Button>View all closed boards</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 0.3;
  flex-direction: column;
  margin-top: 15px;
  padding: 0px 20px;
`;

const Container = styled.div`
  margin: 15px 0px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  padding-left: 0;
  list-style: none;
  & li {
    width: 24%;
    height: 80px;
  }
  & i {
    vertical-align: text-bottom;
  }
  & a {
    display: block;
    height: 100%;
    background-color: #333;
    background-size: cover;
    background-position: 50%;
    border-radius: 3px;
    color: white;
    text-decoration: none;
    font-weight: 700;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  & a {
    padding: 5px 8px;
    margin: 5px;
    background-color: #efefef;
    border-radius: 3px;
  }
  & h3 {
    margin: 0 100px 0 0;
  }
  & i {
    vertical-align: text-bottom;
  }
`;

const Button = styled.button`
  max-width: 30%;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
`;

export default Boards;
