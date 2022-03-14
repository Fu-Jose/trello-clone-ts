import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Board from "../components/Board";
import Header from "../components/Header";
import { getBoard } from "../redux/actions/boardActions";

const Boardpage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard(id));
  }, []);

  return (
    <>
      <Header />
      <Board />
    </>
  );
};

export default Boardpage;
