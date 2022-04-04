import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import styled from "styled-components";

interface Props {
  list: any | null;
  card: ICard;
}

const ModalCardCommentsList: React.FC<Props> = ({ list, card }) => {
  const { commentsList, loading } = useSelector(
    (state: IRootState) => state.comment
  );

  return (
    <>
      {!loading && (
        <div>
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

const Button = styled.button`
  text-align: center;
  width: 10%;
  padding: 5px;
  border-radius: 3px;
  border: 1px transparent;
  margin-left: 39px;
  &:hover {
    background-color: #e2e4e9;
  }
  &.no-bg {
    background-color: transparent;
  }
  &.no-bg:hover {
    background-color: #e2e4e9;
  }
`;