import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../client/axios";
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
  const card = data;
  const [members, setMembers] = useState([]);
  const dispatch = useDispatch();

  const getCard = async (cardId: string) => {
    const { data } = await axios.get(
      `cards/${cardId}?key=${
        process.env.REACT_APP_API_KEY
      }&token=${sessionStorage.getItem("token")}`
    );
    setMembers(data.idMembers);
  };

  useEffect(() => {
    if (card.id !== undefined) {
      getCard(card.id);
      dispatch(getComments(card.id));
    }
  }, [card]);

  // const getComments = async (cardId: string) => {
  //   const { comment } = await axios.get(
  //     `cards/${cardId}/action?key=${
  //       process.env.REACT_APP_API_KEY
  //     }&token=${sessionStorage.getItem("token")}`
  //   );
  //   console.log(comments);
  //   setComments(data);
  // }

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
