import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../client/axios";
import { getComments } from "../redux/actions/commentActions";
import Comment from "./Comment";

interface Props {
  // comments: [];
  list: any | null;
  card: any | null;
}

const ModalCardCommentsList: React.FC<Props> = ({ list, card }) => {
  console.log("ID CARD: " + card.id);
  // const [comm, setComments] = useState([]);
  const { commentsList, loading } = useSelector(
    (state: IRootState) => state.comment
  );
  // const getComments = async (cardId: string) => {
  //   const { data } = await axios.get(
  //     `cards/${cardId}/actions?key=${
  //       process.env.REACT_APP_API_KEY
  //     }&token=${sessionStorage.getItem("token")}`
  //   );
  //   console.log(data);
  //   setComments(data);
  // };
  // console.log(comments)
  // useEffect(() => {
  //   setCardId(card.id);
  // }, [card]);

  // useEffect(() => {
  //   if (card.id !== undefined) {
  //     // getComments(card.id);
  //     dispatch(getComments(card.id));
  //   }
  // }, [cardId]);

  return (
    <>
      {!loading && (
        <div className="">
          <Comment card={card} list={list} comment={undefined} />
          {commentsList &&
            commentsList
              .map((comment, index) => (
                <Comment
                  comment={comment}
                  key={index}
                  list={null}
                  card={null}
                />
              ))
              .reverse()}
        </div>
      )}
    </>
  );
};

export default ModalCardCommentsList;
