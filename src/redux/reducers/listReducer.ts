import * as actionTypes from "../constants/listConstants";

const initialState = {
  id: "",
  idBoard: "",
  name: "",
};

export const listReducer = (
  state: IList = initialState,
  action: ListAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
