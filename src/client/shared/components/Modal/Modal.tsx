import { FC } from "react";
import { useDispatch } from "react-redux";

import {
  removeOrAddCharacters,
  capitalizeFirstLetter,
} from "../../helpers/format";
import { IMealData } from "../../models/meal";

import "./Modal.scss";

interface IProps {
  heading: string;
  title?: string;
  closeModal: () => void;
  content: IMealData | object;
}

const Modal: FC<IProps> = ({ heading, title, closeModal, content }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="darkBG">
        <div className="centered">
          <div className="modal">
            <div className="modal-header">
              <h5 className="heading">{heading}</h5>
            </div>
            <button
              onClick={() => {
                dispatch(closeModal());
              }}
              className="close-btn"
            >
              X
            </button>
            <div className="modal-content">
              <p className="modal-content__title">{title}</p>
              <div className="modal-content__body">
                {Object.entries(content).map((data) => {
                  return (
                    <>
                      <p className="modal-content__desc">
                        <span>
                          {data[0] &&
                            capitalizeFirstLetter(
                              removeOrAddCharacters(data[0], " ")
                            )}
                          :
                        </span>
                        <span>{data[1]}</span>
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
