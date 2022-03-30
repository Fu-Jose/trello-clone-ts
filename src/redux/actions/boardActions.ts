import * as actionTypes from "../constants/boardConstants";
import axios from "../../client/axios";

export const getBoard = (id: any) => async (dispatch: Function) => {
  try {
    dispatch({ type: actionTypes.GET_BOARD_REQUEST });
    const { data } = await axios.get(
      `board/${id}?fields=desc,id,memberships,name,shortLink,shortUrl,url&actions=addAttachmentToCard,addChecklistToCard,addMemberToBoard,addMemberToCard,addToOrganizationBoard,commentCard,convertToCardFromCheckItem,copyBoard,copyCard,copyCommentCard,createBoard,createCard,createList,deleteAttachmentFromCard,deleteCard,disablePlugin,disablePowerUp,emailCard,enablePlugin,enablePowerUp,makeAdminOfBoard,makeNormalMemberOfBoard,makeObserverOfBoard,moveCardFromBoard,moveCardToBoard,moveListFromBoard,moveListToBoard,removeChecklistFromCard,removeFromOrganizationBoard,removeMemberFromCard,unconfirmedBoardInvitation,unconfirmedOrganizationInvitation,updateBoard,updateCard,updateCheckItemStateOnCard,updateList&actions_limit=50&actions_display=true&action_fields=data,date,display,id,idMemberCreator,type&action_memberCreator=true&action_memberCreator_fields=activityBlocked,avatarUrl,fullName,id,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username&cards=visible&card_fields=desc,id,idBoard,idList,idMembers,idShort,name&lists=open&list_fields=id,idBoard,name,pos&members=all&member_fields=avatarUrl,fullName,id,initials,username`
    );
    dispatch({ type: actionTypes.GET_BOARD_SUCCESS, payload: data });
  } catch (error) {
    const message = "Something went wrong";
    dispatch({ type: actionTypes.GET_BOARD_FAIL, payload: message });
  }
};
