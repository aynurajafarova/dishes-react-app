import { FC } from "react";

import "./Modal.scss";

interface IProps {
  heading: string;
  title?: string;
}

const Modal: FC<IProps> = ({ heading, title }) => {
  return (
    <>
      <div className="darkBG">
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">{heading}</h5>
            </div>
            <button className="closeBtn">X</button>
            <div className="modalContent">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
