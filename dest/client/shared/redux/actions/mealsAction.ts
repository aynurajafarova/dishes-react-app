import { Dispatch } from "redux";

import { types } from "./types";
import { IMeal, IMealData } from "./../../models/meal";
import { postNewMeal } from "./../../../apps/meals/api/index";

export const fetchSingleMeal =
  (meals: IMeal[], id: string) => (dispatch: Dispatch) => {
    const [singleMeal] = meals.filter((meal: IMeal) => meal.id === id);

    dispatch({
      type: types.FETCH_SINGLE_MEAL_SUCCESS,
      payload: singleMeal,
    });
  };

export const postAddNewMeal = (data: IMealData) => (dispatch: Dispatch) => {
  dispatch({ type: types.POST_NEW_MEAL_PENDING });

  const res: any = postNewMeal(data)
    .then((response: any) => {
      dispatch({
        type: types.POST_NEW_MEAL_SUCCESS,
        payload: response?.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: types.POST_NEW_MEAL_ERROR,
        payload: err.response.data,
      })
    );
  return res;
};

export const closeModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: types.CLOSE_MODAL,
  });
};
