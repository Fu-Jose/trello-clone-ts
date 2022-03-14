import React, { useEffect } from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";
import ModalCard from "./ModalCard";
import ContextAPI from "../context";
import SideNav from "./SideNav";

const Board: React.FC = () => {
  return (
    <main>
      <div>
        <SideNav />
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
