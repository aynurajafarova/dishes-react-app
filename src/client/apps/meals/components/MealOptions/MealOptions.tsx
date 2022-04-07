import { ChangeEvent, FC } from "react";

import { IMealOption } from "../../../../shared/models/meal";

import "./MealOptions.scss";

interface IProps {
  mealOptions: IMealOption[];
  findMeal: (id: string) => void;
  setMealId: (id: string) => void;
}

const MealOptions: FC<IProps> = ({ mealOptions, findMeal, setMealId }) => {
  return (
    <>
      <div className="meal-types center">
        {mealOptions?.map(({ id, name, type, defaultChecked, title, img }) => {
          return (
            <label className="meal-types__item" htmlFor={id} key={id}>
              <input
                {...{ type, name, id, defaultChecked }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setMealId(e.target.id);
                  findMeal(e.target.id);
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
