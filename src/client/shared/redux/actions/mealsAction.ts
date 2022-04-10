import { postNewMeal } from "./../../../apps/meals/api/index";
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

export const postAddNewMeal = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: types.POST_NEW_MEAL_PENDING });

  const res: any = postNewMeal(data)
    .then((response: any) => {
      console.log(response);
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
  console.log("test");
  dispatch({
    type: types.CLOSE_MODAL,
  });
};
