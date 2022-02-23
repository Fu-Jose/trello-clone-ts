import React from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";

const Board: React.FC = () => {
  return (
    <main>
      <div className="board__container py-2">
        <BoardHeader />
        <BoardCanvas />
      </div>
    </main>
  );
};

export default Board;
