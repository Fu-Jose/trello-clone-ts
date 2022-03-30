import * as actionTypes from "../constants/cardConstants";
import axios from "../../client/axios";

export const getCard = (id: any) => async (dispatch: Function) => {
  try {
    dispatch({ type: actionTypes.GET_CARDS_REQUEST });
    const { data } = await axios.get(`cards/${id}`);
    dispatch({ type: actionTypes.GET_CARDS_SUCCESS, payload: data });
  } catch (error) {
    const message = "Something went wrong";
    dispatch({ type: actionTypes.GET_CARDS_FAIL, payload: message });
  }
};
