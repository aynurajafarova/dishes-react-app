import { IMealOption } from "../models/meal";
import pizzaIcon from "./../assets/images/icons/pizza-icon.svg";
import soupIcon from "./../assets/images/icons/soup-icon.svg";
import sandwichIcon from "./../assets/images/icons/sandwich-icon.svg";

export const mealOptions: IMealOption[] = [
  {
    id: "pizza",
    name: "meal",
    type: "radio",
    defaultChecked: true,
    title: "Pizza",
    img: pizzaIcon,
  },
  {
    id: "soup",
    name: "meal",
    type: "radio",
    title: "Soup",
    img: soupIcon,
  },
  {
    id: "sandwich",
    name: "meal",
    type: "radio",
    title: "Sandwich",
    img: sandwichIcon,
  },
];
