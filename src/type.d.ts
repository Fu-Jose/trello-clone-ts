interface IUser {
  id: string;
  username: string;
  fullName: string;
  initials: string;
  avatarUrl: string;
  idBoards: IBoard[];
}

interface IMember {
  id: string;
  username: string;
  fullName: string;
  initials: string;
  avatarUrl: string;
}
interface IBoard {
  id: string;
  desc: string;
  name: string;
  shortLink: string;
  shortUrl: string;
  url: string;
  actions: IComment[];
  cards: ICard[];
  lists: IList[];
  members: IMember[];
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
  idMembers: string[];
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
  memberCreator: IMember;
  type: string;
}

interface IRootState {
  user: { user: IUser; loading: boolean; error: any };
  board: { board: IBoard; loading: boolean; error: any };
  list: IList;
  card: { card: ICard; loading: boolean; error: any };
  comment: { commentsList: IComment[]; loading: boolean; error: any };
}

type UserState = {
  user: IUser;
};

type UserAction = {
  type: string;
  payload: IUser;
};

type BoardState = {
  board: IBoard;
};

type BoardAction = {
  type: string;
  payload: IBoard;
};

type ListState = {
  list: IList;
};
type ListAction = {
  type: string;
  payload: IList;
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
  payload: IComment;
};

type DispatchType = (args: UserAction) => UserAction;

type DispatchType = (args: BoardAction) => BoardAction;

type DispatchType = (args: ListAction) => ListAction;

type DispatchType = (args: CardAction) => CardAction;

type DispatchType = (args: CommentAction) => CommentAction;
