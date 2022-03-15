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
    default:
      return state;
  }
};
