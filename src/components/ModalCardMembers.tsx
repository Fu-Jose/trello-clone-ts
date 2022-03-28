import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  cardId: string;
  members: IMember[] | undefined;
}

const ModalCardMembers: React.FC<Props> = ({ cardId, members }) => {
  const { loading } = useSelector((state: IRootState) => state.board);

  return (
    <>
      {!loading && (
        <div>
          {members &&
            members.map((member: any) => (
              <div key={member.id}>{member.fullName}</div>
            ))}
        </div>
      )}
    </>
  );
};

export default ModalCardMembers;
