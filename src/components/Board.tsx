import React, { useEffect } from "react";
import BoardHeader from "./BoardHeader";
import BoardCanvas from "./BoardCanvas";
import ModalCard from "./ModalCard";
import ContextAPI from "../context";
import SideNav from "./SideNav";
import { useDispatch } from "react-redux";
import { getBoard } from "../redux/actions/boardActions";
import { getUser } from "../redux/actions/userActions";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  
  useEffect(() => {
    dispatch(getBoard("620a4320f9ce3804136d4796"));
  }, [dispatch]);

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
