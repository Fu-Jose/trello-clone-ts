import React from "react";

export default function BoardHeader() {
  return (
    <div className="board__header">
      <div className="header__left">
        <button className="header__button">
          <i className="bx bx-bar-chart-alt-2 bx-rotate-180"></i>Board
        </button>
        <div className="align-self-center fw-bold mx-3">
          <span>Trello Clone TS</span>
        </div>
        <button className="header__button">
          <i className="bx bx-star"></i>
        </button>
        <div className="divider">|</div>
        <button className="header__button">Testing</button>
        <div className="divider">|</div>
        <button className="header__button">
          <i className="bx bx-group"></i>Workspace visible
        </button>
        <div className="divider">|</div>
        <button className="header__button user__btn">JA</button>
        <button className="header__button invite__btn">
          <i className="bx bx-user-plus"></i>Invite
        </button>
      </div>
      <div className="header__right">
        <button className="header__button">
          <i className="bx bx-rocket"></i>Power-Ups
        </button>
        <button className="header__button">
          <i className="bx bxs-zap"></i>Automation
        </button>
        <div className="divider">|</div>
        <button className="header__button">
          <i className="bx bx-filter"></i>Filter
        </button>
        <button className="header__button">
          <i className="bx bx-dots-horizontal-rounded"></i>Show menu
        </button>
      </div>
    </div>
  );
}
