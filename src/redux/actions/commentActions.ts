import axios from "../../client/axios";
import * as actionTypes from "../constants/commentConstants";

// export function getComment(payload: IComment) {
//   const action: CommentAction = {
//     type: actionTypes.GET_COMMENTS_REQUEST,
//     payload,
//   };
//   return console.log(action);
// }

export const getComments = (id: any) => async (dispatch: Function) => {
  try {
    dispatch({ type: actionTypes.GET_COMMENTS_REQUEST });
    const { data } = await axios.get(`cards/${id}/actions`);
    dispatch({ type: actionTypes.GET_COMMENTS_SUCCESS, payload: data });
  } catch (error) {
    const message = "Something went wrong";
    dispatch({ type: actionTypes.GET_COMMENTS_FAIL, payload: message });
  }
};
