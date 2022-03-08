import * as actionTypes from "../constants/commentConstants";

export function getComment(comment: IComment) {
  const action: CommentAction = {
    type: actionTypes.GET_COMMENTS_REQUEST,
    comment,
  };
  return console.log(action);
}
