import * as actionTypes from "../constants/userConstants";

export function getUser(user: IUser) {
  const action: UserAction = {
    type: actionTypes.GET_USER_INFO_REQUEST,
    user,
  };
  return console.log(action);
}
