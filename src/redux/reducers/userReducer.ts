// import { isTypeQueryNode } from "typescript";
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
    case actionTypes.GET_USER_INFO_REQUEST:
      return { user: {}, loading: true, error: null };
    case actionTypes.GET_USER_INFO_SUCCESS:
      return { user: action.payload, loading: false, error: null };
    case actionTypes.GET_USER_INFO_FAIL:
      return { user: {}, loading: false, error: action.payload };
    default:
      return state;
  }
};
