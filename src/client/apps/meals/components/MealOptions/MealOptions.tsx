import { FC } from "react";

import { mealOptions } from "../../../../shared/helpers/meals";

import "./MealOptions.scss";

const MealOptions: FC = () => {
  return (
    <div id="radios">
      {mealOptions?.map(({ id, name, type, defaultChecked, title, img }) => {
        return (
          <label htmlFor={id} key={id}>
            <input {...{ type, name, id, defaultChecked }} />
            <div className="type-item">
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
