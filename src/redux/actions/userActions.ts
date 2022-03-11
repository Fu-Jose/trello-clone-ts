import * as actionTypes from "../constants/userConstants";
import axios from "../../client/axios";

export const getUser = () => async (dispatch: Function) => {
  try {
    dispatch({ type: actionTypes.GET_USER_INFO_REQUEST });
    const userId = await checkToken(dispatch);
    console.log(userId);
    const token = sessionStorage.getItem("token");
    const { data } = await axios.get(
      `/members/${userId}?key=${process.env.REACT_APP_API_KEY}&token=${token}`
    );
    dispatch({
      type: actionTypes.GET_USER_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_INFO_FAIL,
      payload: "Errore user",
    });
  }
};

const checkToken = async (dispatch: Function) => {
  try {
    const token = sessionStorage.getItem("token");
    const { data } = await axios.get(
      `/tokens/${token}?key=${process.env.REACT_APP_API_KEY}`
    );
    // Qui fare check su validità token (campo data.dateExpires)  
    // Poi funzione che esegua chiamata https://api.trello.com/1/members/ + data.idMember + /key=...&token=...
    return data.idMember;
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_INFO_FAIL,
      payload: "Errore check token",
    });
  }
};


