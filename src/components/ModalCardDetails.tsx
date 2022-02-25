import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ContextAPI from "../context";

interface Props {
  list: {
    id: string;
  };
  // card: {
  //   id: string;
  //   details: string;
  // };
  card: any;
}

const ModalCardDetails: React.FC<Props> = ({ card, list }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const { editCard } = useContext(ContextAPI);

  useEffect(() => {
    setText(card.details);
  }, [card.details]);

  return (
    <div className="d-flex">
      <div className="ms-1">
        <i className="bx bxs-detail" />
      </div>
      <div className="flex-grow-1 mx-3">
        <div className="d-flex">
          <h5 className="">Details</h5>
          <Button className="ms-2" onClick={() => setOpen(true)}>
            Edit
          </Button>
        </div>
        <div className="d-flex">
          {open === true ? (
            <TextArea
              className=""
              autoFocus
              defaultValue={text}
              onFocus={(e: any) =>
                e.target.setSelectionRange(
                  e.target.value.length,
                  e.target.value.length
                )
              }
              onChange={(e: any) => setText(e.target.value)}
              onBlur={(e: any) => setOpen(false)}
            />
          ) : (
            <span>{text}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCardDetails;

const Button = styled.button`
  background-color: #e2e4e9;
  height: 25px;
  border-radius: 3px;
  border: 1px transparent;
`;

const TextArea = styled.textarea`
  border-radius: 3px;
  flex-grow: 1;
`;
