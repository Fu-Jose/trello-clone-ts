import React from "react";

interface Props {
  data: any;
  list: string;
  index: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCard: React.FC<Props> = ({ data, list, index, setOpen }) => {
  return (
    <div
      className="modal"
      tabIndex={index}
      id={data.id}
      data-bs-backdrop="static"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{data.text}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setOpen(false);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <p>{`FROM LIST "${list}"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
