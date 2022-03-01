import * as actionTypes from "../constants/boardConstants";

export function getBoard(board: IBoard) {
  const action: BoardAction = {
    type: actionTypes.GET_BOARD_REQUEST,
    board,
  };
  return console.log(action);
}
