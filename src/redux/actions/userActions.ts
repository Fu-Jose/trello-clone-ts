import * as actionTypes from "../constants/userConstants";
import axios from "../../client/axios";

export function getUser(user: IUser) {
  const action: UserAction = {
    type: actionTypes.GET_USER_INFO_REQUEST,
    user,
  };
  return console.log(action);
}

export const checkToken = () => async (dispatch: Function) => {
  try {
    const token = sessionStorage.getItem("token");
    const { data } = await axios.get(`/tokens/${token}?key=${process.env.REACT_APP_API_KEY}`, {
      headers: {
        Accept: 'application/json',
      },
    }); 
    dispatch({type: actionTypes.GET_USER_INFO_SUCCESS, payload: data});
    console.log(data);
    
    // Qui fare check su validità token (campo data.dateExpires)
    // Poi funzione che esegua chiamata https://api.trello.com/1/members/ + data.idMember + /key=...&token=...
  }
  catch (error) {
    dispatch({ type: actionTypes.GET_USER_INFO_FAIL, payload: 'Errore check token' });
  }
  
}