import { FC } from "react";

import { mealOptions } from "../../../../shared/helpers/meals";

import "./MealOptions.scss";

const MealOptions: FC = () => {
  return (
    <div className="meal-types center">
      {mealOptions?.map(({ id, name, type, defaultChecked, title, img }) => {
        return (
          <label className="meal-types__item" htmlFor={id} key={id}>
            <input {...{ type, name, id, defaultChecked }} />
            <div className="meal-types__item__body center">
              <img src={img} alt={title} />
              <span>{title}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default MealOptions;
