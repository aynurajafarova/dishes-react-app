import { Action } from "redux";
import { types } from "../actions/types";
import { IMeal, IMealData } from "../../models/meal";

interface IMealsState {
  singleMeal: IMeal;
  loading: boolean;
  createdMeal: IMealData;
  error: any;
  openModal: boolean;
}

const initialState: IMealsState = {
  loading: false,
  createdMeal: {},
  error: null,
  openModal: false,
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
        openModal: false,
      };
    case types.POST_NEW_MEAL_PENDING:
      return {
        ...state,
        loading: true,
        createdMeal: {},
        openModal: false,
      };
    case types.POST_NEW_MEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        createdMeal: payload,
        openModal: true,
      };
    case types.POST_NEW_MEAL_ERROR:
      return {
        ...state,
        loading: false,
        createdMeal: {},
        error: payload,
        openModal: true,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
};

export default mealsReducer;
