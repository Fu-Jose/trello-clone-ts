import * as actionTypes from "../constants/boardConstants";

const initialState = {
  id: "",
  desc: "",
  name: "",
  shortLink: "",
  shortUrl: "",
  url: "",
  actions: [
    {
      id: "",
      data: {
        text: "",
        card: { id: "" },
        board: { id: "" },
        list: { id: "" },
      },
      date: "",
      memberCreator: {
        id: "",
        username: "",
        fullName: "",
        initials: "",
        avatarUrl: "",
      },
    },
  ],
  cards: [
    {
      id: "",
      desc: "",
      idBoard: "",
      idList: "",
      name: "",
    },
  ],
  lists: [
    {
      id: "",
      idBoard: "",
      name: "",
    },
  ],
  members: [
    {
      id: "",
      username: "",
      fullName: "",
      initials: "",
      avatarUrl: "",
    },
  ],
};

export const boardReducer = (
  state: IBoard = initialState,
  action: BoardAction
) => {
  switch (action.type) {
    case actionTypes.GET_BOARD_REQUEST:
      return { board: {}, loading: true, error: null };
    case actionTypes.GET_BOARD_SUCCESS:
      return { board: action.payload, loading: false, error: null };
    case actionTypes.GET_BOARD_FAIL:
      return { board: {}, loading: false, error: action.payload };
    default:
      return state;
  }
};
