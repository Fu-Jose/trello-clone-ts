import * as actionTypes from "../constants/cardConstants";

const initialState = {
  id: "",
  desc: "",
  idBoard: "",
  idList: "",
  name: "",
};

export const cardReducer = (
  state: ICard = initialState,
  action: CardAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
