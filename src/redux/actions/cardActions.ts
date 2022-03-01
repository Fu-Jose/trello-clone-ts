import * as actionTypes from "../constants/cardConstants";

export function getCard(card: ICard) {
  const action: CardAction = {
    type: actionTypes.GET_CARDS_REQUEST,
    card,
  };
  return console.log(action);
}
