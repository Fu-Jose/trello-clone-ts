import React from "react";
import styled from "styled-components";

const BoardHeader: React.FC = () => {
  return (
    <Header className="board__header px-3 py-2">
      <HeadIn className="header__left">
        <Button className="header__button">
          <i className="bx bx-bar-chart-alt-2 bx-rotate-180"></i>Board
        </Button>
        <div className="align-self-center fw-bold mx-3">
          <span>Trello Clone TS</span>
        </div>
        <Button className="header__button">
          <i className="bx bx-star"></i>
        </Button>
        <div className="divider">|</div>
        <Button className="header__button">Testing</Button>
        <div className="divider">|</div>
        <Button className="header__button">
          <i className="bx bx-group"></i>Workspace visible
        </Button>
        <div className="divider">|</div>
        <Button className="header__button user__btn">JA</Button>
        <Button className="header__button invite__btn">
          <i className="bx bx-user-plus"></i>Invite
        </Button>
      </HeadIn>
      <HeadIn className="header__right">
        <Button className="header__button">
          <i className="bx bx-rocket"></i>Power-Ups
        </Button>
        <Button className="header__button">
          <i className="bx bxs-zap"></i>Automation
        </Button>
        <div className="divider">|</div>
        <Button className="header__button">
          <i className="bx bx-filter"></i>Filter
        </Button>
        <Button className="header__button">
          <i className="bx bx-dots-horizontal-rounded"></i>Show menu
        </Button>
      </HeadIn>
    </Header>
  );
};

export default BoardHeader;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HeadIn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border-color: transparent;
  padding: 3px 8px;
  margin: 2px;
  &:hover:not(.user__btn, .invite__btn) {
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
  &&.header__button {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &&.header__button i {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
