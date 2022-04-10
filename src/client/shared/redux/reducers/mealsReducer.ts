import { Action } from "redux";
import { types } from "../actions/types";
import { IMeal } from "../../models/meal";

interface IMealsState {
  singleMeal: IMeal;
  loading: boolean;
  createdMeal: IMeal;
  error: any;
}

const initialState: IMealsState = {
  loading: false,
  createdMeal: {},
  error: null,
} as IMealsState;

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
        loading: false,
        createdMeal: {},
      };
    case types.POST_NEW_MEAL_PENDING:
      return {
        ...state,
        loading: true,
        createdMeal: {},
      };
    case types.POST_NEW_MEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        createdMeal: payload,
      };
    case types.POST_NEW_MEAL_ERROR:
      return {
        ...state,
        loading: false,
        createdMeal: {},
        error: payload,
      };
    default:
      return state;
  }
};

export default mealsReducer;
