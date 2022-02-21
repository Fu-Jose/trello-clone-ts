import React from "react";

interface props {
  data: any;
  list: string;
  index: number;
}

const ModalCard = (props: props) => {
  return (
    <div className="modal" tabIndex={props.index} id={props.data.id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.data.text}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>FROM LIST "{props.list}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
