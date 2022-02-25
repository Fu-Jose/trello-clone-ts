import React from "react";
import Comment from "./Comment";

interface Props {
  comments: [];
}

const ModalCardComments: React.FC<Props> = ({ comments }) => {
  return (
    <div className="">
      <Comment comment={null} />
      {comments &&
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
    </div>
  );
};

export default ModalCardComments;
