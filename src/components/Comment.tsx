import React, { useState, useContext } from "react";
import styled from "styled-components";
import ContextAPI from "../context";

interface Props {
  comment: {
    text: string;
    creator: string;
    creationDate: string;
  } | null;
  list: any | null;
  card: any | null;
}

const Comment: React.FC<Props> = ({ comment, list, card }) => {
  const { addComment } = useContext(ContextAPI);
  const [text, setText] = useState("");

  const handleCreate = (card: any, list: any, text: string) => {
    if (text === "") {
      return;
    } else {
      addComment(card, list, text);
    }
    setText("");
  };

  return (
    <div className="d-flex my-3">
      <div>
        <User className="rounded-circle">JJ</User>
      </div>
      <div className="d-flex flex-column flex-grow-1 ms-2 me-3">
        {!comment ? (
          <TextArea
            className="p-2 my-1"
            rows="1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e: any) => {
              setText(e.target.value);
            }}
            onBlur={(e: any) => handleCreate(card, list, text)}
          />
        ) : (
          <>
            <UserName>
              {comment.creator} {comment.creationDate}
            </UserName>
            <Text className="p-2 my-1">{comment.text}</Text>
            <div>
              <span style={{ verticalAlign: "text-bottom", color: "#5e6c84" }}>
                <i className="bx bx-happy"></i>
              </span>{" "}
              - <EditOptions>Edit</EditOptions> -{" "}
              <EditOptions>Delete</EditOptions>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;

const User = styled.button`
  color: #fff;
  height: 30px;
  width: 30px;
  background-color: #00875a;
  border: none;
`;

const UserName = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  border-radius: 3px;
  flex-grow: 1;
`;

const Text = styled.div`
  background-color: #fff;
  border-radius: 3px;
  flex-grow: 1;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const EditOptions = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #5e6c84;
`;
