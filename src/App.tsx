import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="surface">
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
              <input
                type="text"
                placeholder="Search"
                className="input__box py-1"
              />
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
        <main>
          <div className="board__container p-1">
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
            <div className="board__canvas"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
