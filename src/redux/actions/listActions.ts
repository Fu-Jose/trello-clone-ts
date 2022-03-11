import * as actionTypes from "../constants/listConstants";

export function getList(payload: IList) {
  const action: ListAction = {
    type: actionTypes.GET_LIST_INFO_REQUEST,
    payload,
  };
  return console.log(action);
}
