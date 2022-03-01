interface IUser {
  id: string;
  username: string;
  fullName: string;
  initials: string;
  avatarUrl: string;
}

interface IBoard {
  id: string;
  name: string;
  description: string;
  // actions: [IComment];
  // cards: [ICard];
  // lists: [IList];
  // members: [IUser];
}

interface IList {
  id: string;
  idBoard: string;
  name: string;
}

interface ICard {
  id: string;
  desc: string;
  idBoard: string;
  idList: string;
  name: string;
}

interface IComment {
  id: string;
  data: {
    text: string;
    card: { id: string };
    board: { id: string };
    list: { id: string };
  };
  date: string;
  memberCreator: IUser;
}

type UserState = {
  user: IUser;
};
type UserAction = {
  type: string;
  user: IUser;
};

type BoardState = {
  board: IBoard;
};
type BoardAction = {
  type: string;
  board: IBoard;
};

type ListState = {
  list: IList;
};
type ListAction = {
  type: string;
  list: IList;
};

type CardState = {
  card: ICard;
};
type CardAction = {
  type: string;
  card: ICard;
};

type CommentState = {
  comment: IComment;
};
type CommentAction = {
  type: string;
  comment: IComment;
};

type DispatchType = (args: UserAction) => UserAction;

type DispatchType = (args: BoardAction) => BoardAction;

type DispatchType = (args: ListAction) => ListAction;

type DispatchType = (args: CardAction) => CardAction;

type DispatchType = (args: CommentAction) => CommentAction;
