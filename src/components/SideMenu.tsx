import React from "react";
import styled, { css } from "styled-components";

const SideMenu = () => {
  return (
    <Container>
      <Nav>
        <div>
          <List>
            <li className="active">
              <a>
                <span>
                  <i className="bx bxs-bar-chart-square bx-rotate-180 me-2"></i>
                </span>
                <span>Boards</span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i className="bx bxs-spreadsheet me-2"></i>
                </span>
                <span>Templates</span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i className="bx bx-chart me-2"></i>
                </span>
                <span>Home</span>
              </a>
            </li>
          </List>
        </div>
        <div>
          <List>
            <div className="d-flex">
              <div className="d-flex">Workspaces</div>
              <Button>
                <span>
                  <i className="bx bx-plus"></i>
                </span>
              </Button>
            </div>
            <li className="flex-column">
              <a>
                <div></div>
                <span>Testing</span>
                <span>
                  <i className="bx bx-chevron-up me-2"></i>
                </span>
              </a>
              <List>
                <li>
                  <a>
                    <span>
                      <i className="bx bx-bar-chart-square bx-rotate-180 me-2"></i>
                    </span>
                    <span>Boards</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>
                      <i className="bx bx-heart me-2"></i>
                    </span>
                    <span>Highlights</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>
                      <i className="bx bx-customize me-2"></i>
                    </span>
                    <span>Views</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>
                      <i className="bx bx-group me-2"></i>
                    </span>
                    <span>Members</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>
                      <i className="bx bx-cog me-2"></i>
                    </span>
                    <span>Settings</span>
                  </a>
                </li>
              </List>
            </li>
          </List>
        </div>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  postition: sticky-top;
  margin-top: 15px;
  padding: 0px 20px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  & li {
    margin: 5px 0;
    padding: 3px 5px;
  }
  & li.active {
    background-color: #e4f0f6;
    border-radius: 3px;
  }
  & li a {
    display: flex;
  }
  & i {
    vertical-align: text-bottom;
  }
`;

const Nav = styled.nav`
  color: #172b4d;
  & i {
    vertical-align: text-bottom;
  }
  & a {
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  align-self: end;
  cursor: pointer;
  border: none;
`;

export default SideMenu;
