import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../client/axios";
import { getCard } from "../redux/actions/cardActions";
import { getComments } from "../redux/actions/commentActions";
import ModalCardComments from "./ModalCardCommentsList";
import ModalCardDetails from "./ModalCardDetails";
import ModalCardMembers from "./ModalCardMembers";
import ModalCardMenu from "./ModalCardMenu";

interface Props {
  data: any;
  list: {
    id: string;
    title: string;
  };
  index: number;
}

const ModalCard: React.FC<Props> = ({ data, list, index }) => {
  const { board, loading } = useSelector((state: IRootState) => state.board);

  const [members, setMembers] = useState<IMember[]>();

  const dispatch = useDispatch();

  const card = data;

  useEffect(() => {
    if (card.id !== undefined) {
      dispatch(getCard(card.id));
      dispatch(getComments(card.id));
    }
  }, [data]);

  useEffect(() => {
    if (loading) {
      console.log("loading", loading);
      return;
    }
    const thisCard = board.cards.find((c) => c.id === card.id);
    if (thisCard !== undefined) {
      const cardMembers: IMember[] = [];
      card.idMembers.forEach((member: any) => {
        const cardMember = board.members.find((c: any) => c.id === member);
        if (cardMember !== undefined) {
          cardMembers.push(cardMember);
        }
      });
      setMembers(cardMembers);
    }
  }, [card.id]);

  return (
    <div className="modal" tabIndex={index} id={`_${card.id}`}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ backgroundColor: "#F4F5F7" }}>
          <div className="modal-header justify-content-start align-items-start">
            <div className="ms-1">
              <i className="bx bx-columns" />
            </div>
            <div className="flex-grow-1 ms-3">
              <div className="d-flex">
                <h5 className="modal-title">{data.name}</h5>
              </div>
              <div>
                <span>{`from ${list.title}`}</span>
              </div>
            </div>
            <ModalCardMembers cardId={card.id} members={members} />
          </div>
          <div className="modal-body d-flex">
            <div className="col-9">
              <ModalCardDetails list={list} card={card} />
              <ModalCardComments
                // comments={card.comments}
                list={list}
                card={card}
              />
            </div>
            <div className="col-3">
              <ModalCardMenu cardId={card.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
