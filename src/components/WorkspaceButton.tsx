import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WorkspaceButton = () => {
  const { board } = useSelector((state: IRootState) => state.board);
  return (
    <div className="dropdown header__button">
      <Button
        className="dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bx bx-group"></i>Workspace
      </Button>
      <ul
        className="dropdown-menu text-center p-1"
        aria-labelledby="dropdownMenuButton1"
      >
        {board.members.map((member) => (
          <li key={member.id}>{member.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkspaceButton;

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
