import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../client/axios";
import { getComments } from "../redux/actions/commentActions";
import Comment from "./Comment";

interface Props {
  comments: [];
  list: any | null;
  card: any | null;
}

const ModalCardComments: React.FC<Props> = ({ comments, list, card }) => {
  console.log('ID CARD: ' + card.id);
  const [comm, setComments] = useState([]);

  const getComments = async (cardId: string) => {
    const { data } = await axios.get(
      `cards/${cardId}/actions?key=${
        process.env.REACT_APP_API_KEY
      }&token=${sessionStorage.getItem("token")}`
    );
    console.log(data);
  }  

  useEffect(() => {
    if (card.id !== undefined) {
      getComments(card.id);
    }
  }, [card.id]);
  
  return (
    <div className="">
      <Comment card={card} list={list} comment={null} />
      {comments &&
        comments
          .map((comment, index) => (
            <Comment comment={comment} key={index} list={null} card={null} />
          ))
          .reverse()}
    </div>
  );
};

export default ModalCardComments;
