import React, { useEffect, useState } from "react";
import axios from "../client/axios";

interface Props {
  cardId: string;
  members: string[];
}

const ModalCardMembers: React.FC<Props> = ({ cardId, members }) => {
  const [membersInfo, setMembersInfo] = useState<IMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMembers(members);
  }, [cardId, members]);

  useEffect(() => {
    setLoading(false);
  }, [membersInfo]);

  const getMembers = (members: string[]) => {
    const membersArray: IMember[] = [];
    members.map(async (member: string) => {
      const { data } = await axios.get(
        `members/${member}?key=${
          process.env.REACT_APP_API_KEY
        }&token=${sessionStorage.getItem("token")}`
      );
      membersArray.push(data);
    });
    setMembersInfo(membersArray);
  };

  return (
    // BUG: MAP IGNORES OBJECTS
    <>
      {loading === false && (
        <div onClick={() => console.log(membersInfo)}>
          {membersInfo.map((member) => (
            <div key={member.id}>{member.fullName}</div>
          ))}
          AS
        </div>
      )}
    </>
  );
};

export default ModalCardMembers;
