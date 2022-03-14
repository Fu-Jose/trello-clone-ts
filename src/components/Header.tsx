import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header: React.FC = () => {
  const { user } = useSelector((state: IRootState) => state.user);
  return (
    <NavBar className="p-1">
      <NavIn className="header__left">
        <Button className="menu">
          <i className="bx bx-menu"></i>
        </Button>
        <a href="/" className="home fs-5 fw-bold text-decoration-none">
          <i className="bx bxs-bar-chart-square bx-rotate-180 mx-1"></i>
          <span className="align-middle">Trello</span>
        </a>
        <Button className="header__button">
          Workspaces<i className="bx bx-chevron-down-square mx-1"></i>
        </Button>
        <Button className="header__button">
          Recent<i className="bx bx-chevron-down-square mx-1"></i>
        </Button>
        <Button className="header__button">
          Starred<i className="bx bx-chevron-down-square mx-1"></i>
        </Button>
        <Button className="header__button">
          Templates<i className="bx bx-chevron-down-square mx-1"></i>
        </Button>
        <Button className="header__button mx-2">Create</Button>
      </NavIn>
      <NavIn className="header__right">
        <Search className="input__container">
          <i className="bx bx-search input__icon" />
          <input type="text" placeholder="Search" className="input__box py-1" />
        </Search>
        <Button className="header__button">
          <i className="bx bx-info-circle"></i>
        </Button>
        <Button className="header__button bell__btn">
          <i className="bx bx-bell"></i>
        </Button>
        <Button className="header__button user__btn">{user.initials}</Button>
      </NavIn>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(200, 215, 235);
`;

const NavIn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border-color: transparent;
  padding: 3px 8px;
  margin: 2px;
  &&.menu {
    border-radius: 5px;
    background-color: transparent;
    border-color: transparent;
  }
  &:hover:not(.user__btn, .invite__btn, .bell__btn),
  .menu:hover {
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  &&.user__btn {
    color: white;
    background-color: rgb(0, 135, 90) !important;
    border-radius: 50%;
  }
  &&.invite__btn {
    color: white;
    background-color: rgb(0, 121, 191) !important;
  }
  &&.bell__btn {
    color: white;
    background-color: #00c2e0;
  }
  &&.bell__btn:hover {
    background-color: #00869b;
  }
  &:last-child {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Search = styled.div`
  position: relative;
  place-self: center;
  .input__box {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding-left: 30px;
  }
  .input__icon {
    position: absolute;
    left: 8px;
    top: 8px;
  }
`;
