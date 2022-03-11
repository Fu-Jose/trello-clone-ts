import * as actionTypes from "../constants/userConstants";

const initialState = {
  id: "",
  username: "",
  fullName: "",
  initials: "",
  avatarUrl: "",
  idBoards: [],
};

export const userReducer = (
  state: IUser = initialState,
  action: UserAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
