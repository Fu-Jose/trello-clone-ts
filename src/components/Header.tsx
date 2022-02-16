import React from "react";

export default function Header() {
  return (
    <div id="header" className="p-1">
      <div className="header__left">
        <button className="menu">
          <i className="bx bx-menu"></i>
        </button>
        <a href="/" className="home fs-5 fw-bold text-decoration-none">
          <i className="bx bxs-bar-chart-square bx-rotate-180 mx-1"></i>
          <span className="align-middle">Trello</span>
        </a>
        <button className="header__button">
          Workspaces<i className="bx bx-chevron-down-square mx-1"></i>
        </button>
        <button className="header__button">
          Recent<i className="bx bx-chevron-down-square mx-1"></i>
        </button>
        <button className="header__button">
          Starred<i className="bx bx-chevron-down-square mx-1"></i>
        </button>
        <button className="header__button">
          Templates<i className="bx bx-chevron-down-square mx-1"></i>
        </button>
        <button className="header__button mx-2">Create</button>
      </div>
      <div className="header__right">
        <div className="input__container">
          <i className="bx bx-search input__icon" />
          <input type="text" placeholder="Search" className="input__box py-1" />
        </div>
        <button className="header__button">
          <i className="bx bx-info-circle"></i>
        </button>
        <button className="header__button bell__btn">
          <i className="bx bx-bell"></i>
        </button>
        <button className="header__button user__btn">JA</button>
      </div>
    </div>
  );
}
