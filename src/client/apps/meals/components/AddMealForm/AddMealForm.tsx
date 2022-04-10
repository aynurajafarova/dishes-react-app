import { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

import { RootState } from "../../../../shared/redux/reducers";
import {
  IMeal,
  IField,
  IRegisteredFieldItem,
} from "../../../../shared/models/meal";
import MealOptions from "../MealOptions/MealOptions";
import { EFormName } from "../../../../shared/consts/enum";
import { findObj } from "../../../../shared/helpers/meals";

interface IProps {
  meals: IMeal[];
  fetchSingleMeal: (meals: IMeal[], id: string) => (dispatch: Dispatch) => void;
  commonInputFields: IField[];
}

const AddMealForm: FC<InjectedFormProps<any, IProps> & IProps> = ({
  handleSubmit,
  pristine,
  submitting,
  valid,
  meals,
  reset,
  fetchSingleMeal,
  commonInputFields,
}) => {
  const { singleMeal } = useSelector((state: RootState) => state.meals);
  const { addMealForm } = useSelector((state: RootState) => state.form);

  const addMeal = () => {
    const registeredFields: object = addMealForm?.registeredFields;

    const registeredFieldsNames = Object.values(registeredFields).map(
      ({ name }: IRegisteredFieldItem) => name
    );

    const registeredValues = Object.getOwnPropertyNames(
      addMealForm?.values
    ).filter((value) => registeredFieldsNames.includes(value));

    const data = findObj(registeredValues, addMealForm?.values);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(addMeal)}>
      {commonInputFields?.map(({ id, fieldName, label, type }: IField) => {
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
      })}
      <MealOptions {...{ meals, reset, fetchSingleMeal }} />
      {singleMeal?.inputFields.map(({ id, fieldName, label, type }: IField) => {
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
      })}
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm<any, IProps>({
  form: EFormName.ADD_MEAL_FORM,
})(AddMealForm);
