import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { IMeal, IMealData } from "../../models/meal";
import mealsReducer from "./mealsReducer";

export type RootState = {
  meals: {
    singleMeal: IMeal;
    loading: boolean;
    openModal: boolean;
    createdMeal: IMealData;
    error: object;
  };
  form: { addMealForm: any };
};

const rootReducer = combineReducers({
  meals: mealsReducer,
  form: formReducer,
});

export default rootReducer;
