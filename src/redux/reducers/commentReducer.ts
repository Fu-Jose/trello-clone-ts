import * as actionTypes from "../constants/commentConstants";

const initialState = {
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
};

export const commentReducer = (
  state: IComment = initialState,
  action: CommentAction
) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS_REQUEST:
      return { comment: {}, loading: true, error: null };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return { comment: action.payload, loading: false, error: null };
    case actionTypes.GET_COMMENTS_FAIL:
      return { comment: {}, loading: false, error: action.payload };
    default:
      return state;
  }
};
