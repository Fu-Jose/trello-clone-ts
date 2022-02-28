import React, { useEffect } from "react";
import Comment from "./Comment";

interface Props {
  comments: [];
  list: any | null;
  card: any | null;
}

const ModalCardComments: React.FC<Props> = ({ comments, list, card }) => {
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
