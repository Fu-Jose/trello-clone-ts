import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../client/axios";

interface Props {
  cardId: string;
  members: string[];
}

const ModalCardMembers: React.FC<Props> = ({ cardId, members }) => {
  const [membersInfo, setMembersInfo] = useState<string[]>();
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   getMembers(members);
  // }, [cardId, members]);

  // useEffect(() => {
  //   setLoading(false);
  // }, [membersInfo]);

  // const getMembers = (members: string[]) => {
  //   const membersArray: IMember[] = [];
  //   members.map(async (member: string) => {
  //     const { data } = await axios.get(
  //       `members/${member}?key=${
  //         process.env.REACT_APP_API_KEY
  //       }&token=${sessionStorage.getItem("token")}`
  //     );
  //     membersArray.push(data);
  //   });
  //   setMembersInfo(membersArray);
  // };
  const { board } = useSelector((state: IRootState) => state.board);
  const { loading } = useSelector((state: IRootState) => state.board);

  // OGNI VOLTA CHE CARDID SI AGGIORNA CERCHIAMO LA CARD DENTRO STATE.BOARD
  // DENTRO CARD CI SONO IDMEMBERS CHE ANDREMO A PARAGONARE CON BOARD.MEMBERS
  // SE SONO UGUALI ALLORA VUOL DIRE CHE FANNO PARTE DELLA CARD

  // useEffect(() => {
  //   if (!loading) {
  //     const card = board.cards.find((c) => c.id === cardId);
  //     if (card !== undefined) {
  //       const cardMembers = card.idMembers;
  //       console.log(cardMembers);
  //     }
  //   }
  //   // const compare = (cd:string) => {
  //   //   if (cd === board.members[0].id) {
  //   //     cardMembers.push(board.members)
  //   //   }
  //   // }
  //   // card.idMembers.forEach(compare(cd))
  // }, [cardId]);

  return (
    // BUG: MAP IGNORES OBJECTS
    <>
      {!loading && (
        <div onClick={() => console.log(board.cards)}>
          {membersInfo &&
            membersInfo.map((member: any) => (
              <div key={member.id}>{member.fullName}</div>
            ))}
        </div>
      )}
    </>
  );
};

export default ModalCardMembers;
