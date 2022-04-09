import { ChangeEvent, FC } from "react";
import { Field } from "redux-form";

import { IMeal } from "../../../../shared/models/meal";

import "./MealOptions.scss";

interface IProps {
  meals: IMeal[];
  setMealId: (id: string) => void;
  reset: () => void;
}

const MealOptions: FC<IProps> = ({ meals, setMealId, reset }) => {
  return (
    <>
      <div className="meal-types center">
        {meals?.map(({ id, name, type, defaultChecked, title, img, value }) => {
          return (
            <label className="meal-types__item" htmlFor={id} key={id}>
              <Field
                component="input"
                checked={defaultChecked}
                {...{ type, name, id, value }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setMealId(e.target.id);
                  reset();
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
