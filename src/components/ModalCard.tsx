import React, { useState } from "react";
import ModalCardComments from "./ModalCardCommentsList";
import ModalCardDetails from "./ModalCardDetails";
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
  console.log(data);
  return (
    <div className="modal" tabIndex={index} id={`_${data.id}`}>
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
          </div>
          <div className="modal-body d-flex">
            <div className="col-9">
              <ModalCardDetails list={list} card={data} />
              <ModalCardComments
                comments={data.comments}
                list={list}
                card={data}
              />
            </div>
            <div className="col-3">
              <ModalCardMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
