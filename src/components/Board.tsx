import React from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";
import ModalCard from "./ModalCard";
import ContextAPI from "../context";

const Board: React.FC = () => {
  return (
    <main>
      <div className="board__container py-2">
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
    </main>
  );
};

export default Board;
