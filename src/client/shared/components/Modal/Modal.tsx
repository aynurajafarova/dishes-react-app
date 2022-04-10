import { FC } from "react";
import { useDispatch } from "react-redux";

import "./Modal.scss";

interface IProps {
  heading: string;
  title?: string;
  closeModal: () => void;
}

const Modal: FC<IProps> = ({ heading, title, closeModal }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="darkBG">
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">{heading}</h5>
            </div>
            <button
              onClick={() => {
                dispatch(closeModal());
              }}
              className="closeBtn"
            >
              X
            </button>
            <div className="modalContent">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
