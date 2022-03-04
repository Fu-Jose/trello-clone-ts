import React from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";
import ModalCard from "./ModalCard";
import ContextAPI from "../context";
import SideMenu from "./SideMenu";

const Board: React.FC = () => {
  return (
    <main>
      <div>
        <SideMenu />
        <div className="board__container">
          <BoardHeader />
          <BoardCanvas />
          <ContextAPI.Consumer>
            {({ modal }) => (
              <ModalCard
                data={modal.data}
                list={modal.list}
                index={modal.index}
              />
            )}
          </ContextAPI.Consumer>
        </div>
      </div>
    </main>
  );
};

export default Board;
