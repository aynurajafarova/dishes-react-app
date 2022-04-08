import { Dispatch } from "redux";

import { types } from "./types";
import { IMeal } from "./../../models/meal";

export const fetchSingleMeal =
  (meals: IMeal[], id: string) => (dispatch: Dispatch) => {
    const [singleMeal] = meals.filter((meal: IMeal) => meal.id === id);

    dispatch({
      type: types.FETCH_SINGLE_MEAL_SUCCESS,
      payload: singleMeal,
    });
  };
