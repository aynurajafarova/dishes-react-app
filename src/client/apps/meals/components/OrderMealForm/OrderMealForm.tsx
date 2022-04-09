import { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { useSelector } from "react-redux";

import { RootState } from "../../../../shared/redux/reducers";
import { IMeal, IMealField } from "../../../../shared/models/meal";
import MealOptions from "../MealOptions/MealOptions";

interface IProps {
  meals: IMeal[];
  setMealId: (id: string) => void;
}

const OrderMealForm: FC<InjectedFormProps<any, IProps> & IProps> = ({
  handleSubmit,
  pristine,
  submitting,
  valid,
  meals,
  reset,
  setMealId,
}) => {
  const { singleMeal } = useSelector((state: RootState) => state.meals);

  return (
    <form onSubmit={handleSubmit((val: any) => console.log(val))}>
      <MealOptions {...{ meals, setMealId, reset }} />
      {singleMeal?.inputFields.map(
        ({ id, fieldName, label, type }: IMealField) => {
          return (
            <div key={id}>
              <label htmlFor={fieldName}>{label}:</label>
              <Field
                name={fieldName}
                type={type}
                component="input"
                id={fieldName}
                placeholder={fieldName}
              />
            </div>
          );
        }
      )}
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm<any, IProps>({
  form: "orderMealForm",
})(OrderMealForm);
