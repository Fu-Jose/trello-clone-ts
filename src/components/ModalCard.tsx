import React from "react";

interface Props {
  data: any;
  list: string;
  index: number;
}

const ModalCard: React.FC<Props> = ({ data, list, index }) => {
  return (
    <div className="modal" tabIndex={index} id={data.id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{data.text}</h5>
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
