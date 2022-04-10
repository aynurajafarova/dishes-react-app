import { IMeal, IField } from "../models/meal";
import pizzaIcon from "./../assets/images/icons/pizza-icon.svg";
import soupIcon from "./../assets/images/icons/soup-icon.svg";
import sandwichIcon from "./../assets/images/icons/sandwich-icon.svg";

export const meals: IMeal[] = [
  {
    id: "pizza",
    name: "type",
    type: "radio",
    defaultChecked: true,
    title: "Pizza",
    value: "pizza",
    img: pizzaIcon,
    inputFields: [
      {
        id: 0,
        fieldName: "no_of_slices",
        label: "Number of slices",
        type: "number",
        minValue: "0",
      },
      {
        id: 1,
        fieldName: "diameter",
        label: "Diameter",
        type: "number",
        minValue: "0",
      },
    ],
  },
  {
    id: "soup",
    name: "type",
    type: "radio",
    title: "Soup",
    value: "soup",
    img: soupIcon,
    inputFields: [
      {
        id: 0,
        fieldName: "spiciness_scale",
        label: "Spiciness scale",
        type: "number",
        minValue: "0",
      },
    ],
  },
  {
    id: "sandwich",
    name: "type",
    type: "radio",
    title: "Sandwich",
    value: "sandwich",
    img: sandwichIcon,
    inputFields: [
      {
        id: 0,
        fieldName: "slices_of_bread",
        label: "Slices of bread",
        type: "number",
        minValue: "0",
      },
    ],
  },
];

export const commonInputFields: IField[] = [
  {
    id: 0,
    fieldName: "name",
    label: "Meal name",
    type: "string",
  },
  {
    id: 1,
    fieldName: "preparation_time",
    label: "Preparation time",
    type: "time",
    step: "2",
  },
];

export const findObj = (arr: any, obj: object) => {
  let arrOfKeys: any[] = [];
  const newObj = {};

  arr.filter(() => {
    Object.keys(obj).filter((key) => {
      arr.includes(key) && arrOfKeys.push(key);
    });
  });

  arrOfKeys = arrOfKeys.filter(
    (item, index) => arrOfKeys.indexOf(item) != index
  );

  arrOfKeys.filter((item) => {
    for (const [key, value] of Object.entries(obj)) {
      if (item == key) {
        newObj[key] = value;
      }
    }
  });

  return newObj;
};
