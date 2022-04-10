import { FC } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Field } from "redux-form";

import { IMeal } from "../../../../shared/models/meal";

import "./MealOptions.scss";

interface IProps {
  meals: IMeal[];
  fetchSingleMeal: (meals: IMeal[], id: string) => (dispatch: Dispatch) => void;
  className?: string;
}

const MealOptions: FC<IProps> = ({ meals, fetchSingleMeal, className }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`meal-types ${className}`}>
        <p>Select meal type:</p>
        <div className="meal-types__list center">
          {meals &&
            meals?.map(({ id, name, type, title, img, value }) => {
              return (
                <label
                  className="meal-types__item"
                  htmlFor={id.toString()}
                  key={id}
                >
                  <Field
                    component="input"
                    {...{ type, name, id, value }}
                    onChange={() => {
                      dispatch(fetchSingleMeal(meals, id.toString()));
                    }}
                  />
                  <div className="meal-types__item__body center">
                    <img src={img} alt={title} />
                    <span>{title}</span>
                  </div>
                </label>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MealOptions;
