import { FC } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Field } from "redux-form";

import { IMeal } from "../../../../shared/models/meal";

import "./MealOptions.scss";

interface IProps {
  meals: IMeal[];
  reset: () => void;
  fetchSingleMeal: (meals: IMeal[], id: string) => (dispatch: Dispatch) => void;
}

const MealOptions: FC<IProps> = ({ meals, fetchSingleMeal }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="meal-types center">
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
                    // reset();
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
    </>
  );
};

export default MealOptions;
