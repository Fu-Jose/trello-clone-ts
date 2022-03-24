import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

interface Props {
  list: any | null;
  card: any | null;
}

const ModalCardCommentsList: React.FC<Props> = ({ list, card }) => {
  const { commentsList, loading } = useSelector(
    (state: IRootState) => state.comment
  );

  return (
    <>
      {!loading && (
        <div className="">
          <Comment card={card} comment={undefined} />
          {commentsList &&
            commentsList
              .filter((comment) => comment.type === "commentCard")
              .map((comment: any, index: number) => (
                <Comment comment={comment} key={index} card={null} />
              ))
              .reverse()}
        </div>
      )}
    </>
  );
};

export default ModalCardCommentsList;
