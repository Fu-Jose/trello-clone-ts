import * as actionTypes from "../constants/boardConstants";
import axios from "../../client/axios";

export const getBoard = (id: string) => async (dispatch: Function) => {
  // const axiosConfig = {
  //   headers: {
  //     "content-Type": "application/json",
  //     Accept: "/",
  //     "Cache-Control": "no-cache",
  //     Cookie:
  //       "token=6061e0f246374e875dd6595b%2FVNofC2K91gGBDmIDIpEynLuJEKUj9Iot6x6MGv2Cb8wM2cGrBsoDqEVz82XcRkKQ; loggedIn=1; dsc=914f6b816b08b37547f74488e0c69425957d09617c4eeb99cdbf15a1dd3cd50a; preAuthProps=s%3A6061e0f246374e875dd6595b%3AisEnterpriseAdmin%3Dfalse.9RXdeO89Z%2ByTspLE%2B8QhbmtfVy4bfd289mOOOLBkqO4",
  //   },
  //   credentials: "same-origin",
  // };
  // axios.defaults.withCredentials = true;
  try {
    dispatch({ type: actionTypes.GET_BOARD_REQUEST });
    const { data } = await axios.get(
      // `member/6061e0f246374e875dd6595b`
      `board/${id}?fields=desc,id,memberships,name,shortLink,shortUrl,url&actions=addAttachmentToCard,addChecklistToCard,addMemberToBoard,addMemberToCard,addToOrganizationBoard,commentCard,convertToCardFromCheckItem,copyBoard,copyCard,copyCommentCard,createBoard,createCard,createList,deleteAttachmentFromCard,deleteCard,disablePlugin,disablePowerUp,emailCard,enablePlugin,enablePowerUp,makeAdminOfBoard,makeNormalMemberOfBoard,makeObserverOfBoard,moveCardFromBoard,moveCardToBoard,moveListFromBoard,moveListToBoard,removeChecklistFromCard,removeFromOrganizationBoard,removeMemberFromCard,unconfirmedBoardInvitation,unconfirmedOrganizationInvitation,updateBoard,updateCard,updateCheckItemStateOnCard,updateList&actions_limit=50&actions_display=true&action_fields=data,date,display,id,idMemberCreator,type&action_memberCreator=true&action_memberCreator_fields=activityBlocked,avatarUrl,fullName,id,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username&cards=visible&card_fields=desc,id,idBoard,idList,idMembers,idShort,name&lists=open&list_fields=id,idBoard,name,pos&members=all&member_fields=avatarUrl,fullName,id,initials,username`
      // axiosConfig
    );

    // const response = await fetch(
    //   `https://cors-anywhere.herokuapp.com/https://api.trello.com/board/${id}?fields=desc,id,memberships,name,shortLink,shortUrl,url&actions=addAttachmentToCard,addChecklistToCard,addMemberToBoard,addMemberToCard,addToOrganizationBoard,commentCard,convertToCardFromCheckItem,copyBoard,copyCard,copyCommentCard,createBoard,createCard,createList,deleteAttachmentFromCard,deleteCard,disablePlugin,disablePowerUp,emailCard,enablePlugin,enablePowerUp,makeAdminOfBoard,makeNormalMemberOfBoard,makeObserverOfBoard,moveCardFromBoard,moveCardToBoard,moveListFromBoard,moveListToBoard,removeChecklistFromCard,removeFromOrganizationBoard,removeMemberFromCard,unconfirmedBoardInvitation,unconfirmedOrganizationInvitation,updateBoard,updateCard,updateCheckItemStateOnCard,updateList&actions_limit=50&actions_display=true&action_fields=data,date,display,id,idMemberCreator,type&action_memberCreator=true&action_memberCreator_fields=activityBlocked,avatarUrl,fullName,id,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username&cards=visible&card_fields=desc,id,idBoard,idList,idMembers,idShort,name&lists=open&list_fields=id,idBoard,name,pos&members=all&member_fields=avatarUrl,fullName,id,initials,username`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Access-Control-Allow-Origin": "http://localhost:3000",
    //       Cookie:
    //         "token=6061e0f246374e875dd6595b%2FVNofC2K91gGBDmIDIpEynLuJEKUj9Iot6x6MGv2Cb8wM2cGrBsoDqEVz82XcRkKQ; loggedIn=1; dsc=914f6b816b08b37547f74488e0c69425957d09617c4eeb99cdbf15a1dd3cd50a; preAuthProps=s%3A6061e0f246374e875dd6595b%3AisEnterpriseAdmin%3Dfalse.9RXdeO89Z%2ByTspLE%2B8QhbmtfVy4bfd289mOOOLBkqO4",
    //     },
    //     credentials: "include",
    //   }
    // );

    dispatch({ type: actionTypes.GET_BOARD_SUCCESS, payload: data });
  } catch (error) {
    const message = "Something went wrong";
    dispatch({ type: actionTypes.GET_BOARD_FAIL, payload: message });
  }
};
