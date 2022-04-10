import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { IMeal } from "../../models/meal";

import mealsReducer from "./mealsReducer";

export type RootState = {
  meals: {
    singleMeal: IMeal;
  };
  form: { addMealForm: any };
};

const rootReducer = combineReducers({
  meals: mealsReducer,
  form: formReducer,
});

export default rootReducer;
