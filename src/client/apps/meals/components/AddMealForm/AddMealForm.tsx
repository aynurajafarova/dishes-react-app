import { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
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
import { postAddNewMeal } from "../../../../shared/redux/actions/mealsAction";

import "./AddMealForm.scss";

interface IProps {
  meals: IMeal[];
  fetchSingleMeal: (meals: IMeal[], id: string) => (dispatch: Dispatch) => void;
  commonInputFields: IField[];
}

const validate = (values: object) => {
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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
  step,
  minValue,
}) => (
  <div>
    <label>{label}</label>
    <div className="add-meal-form__field__input">
      <input
        {...input}
        placeholder={label}
        type={type}
        step={step}
        min={minValue}
      />
      {touched && error && (
        <span className="add-meal-form__field__error">*{error}</span>
      )}
    </div>
  </div>
);

const AddMealForm: FC<InjectedFormProps<any, IProps> & IProps> = ({
  handleSubmit,
  submitting,
  meals,
  invalid,
  error,
  anyTouched,
  fetchSingleMeal,
  commonInputFields,
}) => {
  const { singleMeal } = useSelector((state: RootState) => state.meals);
  const { addMealForm } = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();

  const addMeal = () => {
    const registeredFields: object = addMealForm?.registeredFields;

    const registeredFieldsNames = Object.values(registeredFields).map(
      ({ name }: IRegisteredFieldItem) => name
    );

    const registeredValues = Object.getOwnPropertyNames(
      addMealForm?.values
    ).filter((value) => registeredFieldsNames.includes(value));

    const data = findObj(registeredValues, addMealForm?.values);

    singleMeal?.inputFields.map(({ type, fieldName }: IField) => {
      if (type === "number")
        return (data[fieldName] = parseInt(data[fieldName]));
    });

    dispatch(postAddNewMeal(data));
  };
  return (
    <form className="add-meal-form" onSubmit={handleSubmit(addMeal)}>
      {commonInputFields?.map(
        ({ id, fieldName, label, type, step }: IField) => {
          return (
            <div key={id} className="add-meal-form__field">
              <label
                className="add-meal-form__field__label"
                htmlFor={fieldName}
              >
                {label}:
              </label>
              <Field
                name={fieldName}
                type={type}
                component={renderField}
                id={fieldName}
                placeholder={fieldName}
                step={step}
                className="add-meal-form__field__input"
              />
              {anyTouched && error && <span>{error}</span>}
            </div>
          );
        }
      )}
      <MealOptions
        className="add-meal-form__field"
        {...{ meals, fetchSingleMeal, renderField }}
      />
      {singleMeal &&
        singleMeal?.inputFields.map(
          ({ id, fieldName, label, type, minValue }: IField) => {
            return (
              <div key={id} className="add-meal-form__field">
                <label
                  className="add-meal-form__field__label"
                  htmlFor={fieldName}
                >
                  {label}:
                </label>
                <Field
                  name={fieldName}
                  type={type}
                  component={renderField}
                  id={fieldName}
                  placeholder={fieldName}
                  minValue={minValue}
                  className="add-meal-form__field__input"
                />
              </div>
            );
          }
        )}
      <div className="add-meal-form__field add-meal-form__btn">
        <button type="submit" disabled={invalid || submitting}>
          Create
        </button>
      </div>
    </form>
  );
};

export default reduxForm<any, IProps>({
  form: EFormName.ADD_MEAL_FORM,
  validate,
})(AddMealForm);
