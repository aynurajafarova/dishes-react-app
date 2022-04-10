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
const validate = (values: any) => {
  const errors = {
    name: "",
    type: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: "",
  };
  const inputFields = [
    "name",
    "type",
    "no_of_slices",
    "diameter",
    "spiciness_scale",
    "slices_of_bread",
  ];
  inputFields.forEach((field: string) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (
    parseInt(values.spiciness_scale) === 0 ||
    parseInt(values.spiciness_scale) > 10
  ) {
    errors.spiciness_scale = "The spiciness scale should be between 1-10";
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const AddMealForm: FC<InjectedFormProps<any, IProps> & IProps> = ({
  handleSubmit,
  submitting,
  meals,
  invalid,
  reset,
  error,
  anyTouched,
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
              component={renderField}
              id={fieldName}
              placeholder={fieldName}
            />
            {anyTouched && error && <span>{error}</span>}
          </div>
        );
      })}
      <MealOptions {...{ meals, reset, fetchSingleMeal, renderField }} />
      {singleMeal?.inputFields.map(({ id, fieldName, label, type }: IField) => {
        return (
          <div key={id}>
            <label htmlFor={fieldName}>{label}:</label>
            <Field
              name={fieldName}
              type={type}
              component={renderField}
              id={fieldName}
              placeholder={fieldName}
            />
          </div>
        );
      })}
      <button type="submit" disabled={invalid || submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm<any, IProps>({
  form: EFormName.ADD_MEAL_FORM,
  validate,
})(AddMealForm);
