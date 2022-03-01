import * as actionTypes from "../constants/boardConstants";

const initialState = {
  id: "",
  name: "",
  description: "",
  // actions: [],
  // cards:[],
  // lists:[],
  // members: [],
};

export const boardReducer = (
  state: IBoard = initialState,
  action: BoardAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
