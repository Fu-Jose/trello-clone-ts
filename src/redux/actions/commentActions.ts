import axios from "../../client/axios";
import * as actionTypes from "../constants/commentConstants";

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

export const newComment = (id: any, comment: String) => async (dispatch: Function) => {
  try {
    dispatch({ type: actionTypes.PUT_COMMENTS_REQUEST });
    const { data } = await axios.post(
      `cards/${id}/actions/comments?text=${comment}`
    );
    dispatch({ type: actionTypes.PUT_COMMENTS_SUCCESS, payload: data });
  } catch (error) {
    const message = "Put comment error";
    dispatch({ type: actionTypes.PUT_COMMENTS_FAIL, payload: message });
  }
};