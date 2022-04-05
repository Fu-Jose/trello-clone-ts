import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newComment } from "../redux/actions/commentActions";
import styled from "styled-components";
interface Comment {
  comment:
    | {
        id: string;
        data: {
          text: string;
        };
        memberCreator: { initials: string };
      }
    | undefined;
  // list: any | null;
  card: any | null;
}

const Comment: React.FC<Comment> = ({ comment, card }) => {
  const [text, setText] = useState("");
  
  const { user, loading } = useSelector((state: IRootState) => state.user);

  const dispatch = useDispatch();
  
  const handleCreate = (card: any, text: string) => {
    const cardid = card.id;
    
    if (text === "") {
      return;
    } else { 
      dispatch(newComment(cardid, text));
    }
    setText("");
  };

  useEffect(() => {
    if (comment) {
      setText(comment.data.text);
    }
  }, []);

  return (
    <>
      {!loading && (
        <div className="d-flex my-3 align-items-center w-100">
          <div>
            <User className="rounded-circle">
              {comment
                ? comment.memberCreator.initials
                : user
                ? user.initials
                : "AA"}
            </User>
          </div>
          <div className="d-flex flex-column flex-grow-1 mx-2">
            <TextArea
              className="p-2 my-1"
              rows="1"
              value={text}
              onChange={(e: any) => {
                setText(e.target.value);
              }}
              onBlur={(e: any) => handleCreate(card, text)}
            />
          </div>
          {comment && (
            <div className="d-flex flex-column">
              <div>
                <span
                  style={{ verticalAlign: "text-bottom", color: "#5e6c84" }}
                >
                  <i className="bx bx-happy"></i>
                </span>{" "}
                - <EditOptions>Edit</EditOptions> -{" "}
                <EditOptions>Delete</EditOptions>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Comment;

const User = styled.button`
  color: #fff;
  height: 30px;
  width: 30px;
  background-color: #00875a;
  border: none;
  float: left;
`;

const UserName = styled.span`
  float: left;
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
