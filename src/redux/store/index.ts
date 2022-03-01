import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "../reducers/userReducer";
import { listReducer } from "../reducers/listReducer";
import { cardReducer } from "../reducers/cardReducer";
import { commentReducer } from "../reducers/commentReducer";
import { boardReducer } from "../reducers/boardReducer";

const bigReducer = combineReducers({
  user: userReducer,
  board: boardReducer,
  list: listReducer,
  card: cardReducer,
  comment: commentReducer,
});

export const store = createStore(
  bigReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
