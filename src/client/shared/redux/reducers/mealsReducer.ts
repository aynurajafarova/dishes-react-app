import { Action } from "redux";
import { types } from "../actions/types";
import { IMeal } from "../../models/meal";

interface IMealsState {
  singleMeal: IMeal;
}

const initialState: IMealsState = {} as IMealsState;

interface IFetchSingleMealAction extends Action {
  payload: IMeal;
}

type MealActions = IFetchSingleMealAction;

const mealsReducer = (state = initialState, { type, payload }: MealActions) => {
  switch (type) {
    case types.FETCH_SINGLE_MEAL_SUCCESS:
      return {
        ...state,
        singleMeal: payload,
      };

    default:
      return state;
  }
};

export default mealsReducer;
