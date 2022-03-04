import React, { useEffect } from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";
import ModalCard from "./ModalCard";
import ContextAPI from "../context";
import { useDispatch } from "react-redux";
import { getBoard } from "../redux/actions/boardActions";

const Board: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard("60cc6cd536a7c765dc6c76d0"));
  }, [dispatch]);

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
