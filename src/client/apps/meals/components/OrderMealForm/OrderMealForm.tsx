import { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { useSelector } from "react-redux";

import { RootState } from "../../../../shared/redux/reducers";
import { IMealField } from "../../../../shared/models/meal";

const OrderMealForm: FC<InjectedFormProps> = ({
  handleSubmit,
  pristine,
  submitting,
  valid,
}) => {
  const { singleMeal } = useSelector((state: RootState) => state.meals);

  return (
    <form onSubmit={handleSubmit((val: any) => console.log(val))}>
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

export default reduxForm({
  form: "orderMealForm",
})(OrderMealForm);
