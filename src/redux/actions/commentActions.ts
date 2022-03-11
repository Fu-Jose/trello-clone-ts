import * as actionTypes from "../constants/commentConstants";

export function getComment(payload: IComment) {
  const action: CommentAction = {
    type: actionTypes.GET_COMMENTS_REQUEST,
    payload,
  };
  return console.log(action);
}
