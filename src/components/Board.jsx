import React from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";

function Board() {
  return (
    <main>
      <div className="board__container p-1">
        <BoardHeader />
        <BoardCanvas />
      </div>
    </main>
  );
}

export default Board;
