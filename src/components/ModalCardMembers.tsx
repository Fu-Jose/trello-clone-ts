import React, { useEffect, useState } from "react";
import axios from "../client/axios";

interface Props {
  cardId: string;
  members: string[];
}

const ModalCardMembers: React.FC<Props> = ({ cardId, members }) => {
  const [membersInfo, setMembersInfo] = useState<IMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMembers(members);
  }, [cardId, members]);

  const getMembers = (members: string[]) => {
    const membersArray: any = [];
    const getName = async (id: string) => {
      const { data } = await axios.get(
        `members/${id}?key=${
          process.env.REACT_APP_API_KEY
        }&token=${sessionStorage.getItem("token")}`
      );
      return data;
    };
    members.map(async (member: string) => {
      const data = await getName(member);
      membersArray.push(data);
      setMembersInfo(membersArray);
      setLoading(false);
    });
  };

  return (
    // BUG: MAP IGNORES OBJECTS
    <div>
      {loading === false &&
        membersInfo.map((member) => (
          <div key={member.id}>{member.fullName}</div>
        ))}
    </div>
  );
};

export default ModalCardMembers;
