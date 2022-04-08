import { IMeal } from "../models/meal";
import pizzaIcon from "./../assets/images/icons/pizza-icon.svg";
import soupIcon from "./../assets/images/icons/soup-icon.svg";
import sandwichIcon from "./../assets/images/icons/sandwich-icon.svg";

export const meals: IMeal[] = [
  {
    id: "pizza",
    name: "meal",
    type: "radio",
    defaultChecked: true,
    title: "Pizza",
    img: pizzaIcon,
    inputFields: [
      {
        id: 0,
        fieldName: "no_of_slices",
        label: "Number of slices",
        type: "number",
      },
      { id: 1, fieldName: "diameter", label: "Diameter", type: "number" },
    ],
  },
  {
    id: "soup",
    name: "meal",
    type: "radio",
    title: "Soup",
    img: soupIcon,
    inputFields: [
      {
        id: 0,
        fieldName: "spiciness_scale",
        label: "Spiciness scale",
        type: "number",
      },
    ],
  },
  {
    id: "sandwich",
    name: "meal",
    type: "radio",
    title: "Sandwich",
    img: sandwichIcon,
    inputFields: [
      {
        id: 0,
        fieldName: "slices_of_bread",
        label: "Slices of bread",
        type: "number",
      },
    ],
  },
];
