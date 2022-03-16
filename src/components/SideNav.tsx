import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import BoardCard from "./BoardCard";

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const menu = () => {
    const sideMenu = document.getElementById("side-menu");
    if (!open) {
      if (sideMenu) {
        sideMenu.className = "side-menu open";
      }
      setOpen(true);
    } else {
      if (sideMenu) {
        sideMenu.className = "side-menu";
      }
      setOpen(false);
    }
  };

  const { user, loading } = useSelector((state: IRootState) => state.user);

  return (
    <div id="side-menu">
      {!open ? (
        <Nav>
          <div>
            <Button closed onClick={() => menu()}>
              <i className="bx bxs-chevron-right bx-sm"></i>
            </Button>
          </div>
        </Nav>
      ) : (
        <Nav open>
          <div className="d-flex flex-column">
            <div
              className="d-flex align-items-center justify-content-between px-3 py-2"
              style={{ borderBottom: "1px solid" }}
            >
              <a>
                <div
                  className="d-flex align-items-center"
                  style={{ width: "36px", height: "36px" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      color: "white",
                      backgroundColor: "#00875A",
                      height: "100%",
                      width: "100%",
                      borderRadius: "3px",
                    }}
                  >
                    T
                  </div>
                </div>
              </a>
              <div className="ms-2 me-3 flex-1">
                <span>Workspace</span>
                <p style={{ marginBottom: "0" }}>Free</p>
              </div>
              <div>
                <Button onClick={() => menu()}>
                  <i className="bx bx-chevron-left bx-sm"></i>
                </Button>
              </div>
            </div>
            <div className="mx-3">
              <div>
                <Option>
                  <i className="bx bxs-bar-chart-square"></i>
                  <span>
                    <Link
                      className="text-decoration-none text-dark"
                      to={`/profile#token=${sessionStorage.getItem("token")}`}
                    >
                      Boards
                    </Link>
                  </span>
                </Option>
                <Option>
                  <i className="bx bx-user"></i>
                  <span>User</span>
                </Option>
                <Option>
                  <i className="bx bxs-cog"></i>
                  <span>Settings</span>
                </Option>
              </div>
              <div className="mt-4">
                <h6>Workspace views</h6>
                <Option>
                  <i className="bx bx-table"></i>
                  <span>Table</span>
                </Option>
                <Option>
                  <i className="bx bx-calendar"></i>
                  <span>Calendar</span>
                </Option>
              </div>
              <div className="mt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Your boards</h6>
                  <i className="bx bx-plus"></i>
                </div>
                {loading === false &&
                  user.idBoards.map((i, index: number) => (
                    <BoardCard id={i} key={index} type="side" />
                  ))}
              </div>
            </div>
            <div
              className="d-flex"
              style={{
                padding: "0px 15px 0px 15px",
                marginTop: "180px",
                borderTop: "1px solid #172b4d",
              }}
            >
              <Button premium>
                <div>
                  <i className="bx bxs-briefcase-alt"></i>
                </div>
                <div>Try Premium for free!</div>
              </Button>
            </div>
          </div>
        </Nav>
      )}
    </div>
  );
};

export default SideNav;

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  position: fixed;
  //   border-radius: 5px;
  height: calc(100vh - 46.4px);
  min-height: 100%;
  // padding: 10px 5px 0 10px;
  ${(props) =>
    props.open &&
    css`
      background: #c8d7eb;
      color: #172b4d;
    `}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border: none;
  ${(props) =>
    props.premium &&
    css`
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      margin: 8px;
      background: linear-gradient(97.78deg, #4423a3 17.5%, #aa63cb 113.39%);
      color: #fff;
    `}
  ${(props) =>
    props.closed &&
    css`
      margin-top: 10px;
    `}
`;

const Option = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  color: #172b4d;
  cursor: pointer;
  &:hover {
    color: #172b4d;
  }
  & span {
    margin-left: 10px;
  }
`;
