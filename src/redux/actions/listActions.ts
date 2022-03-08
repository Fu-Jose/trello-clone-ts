import * as actionTypes from "../constants/listConstants";

export function getList(list: IList) {
  const action: ListAction = {
    type: actionTypes.GET_LIST_INFO_REQUEST,
    list,
  };
  return console.log(action);
}
