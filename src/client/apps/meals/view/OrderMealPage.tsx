import { FC } from "react";

import OrderMealForm from "../components/OrderMealForm/OrderMealForm";
import MealOptions from "../components/MealOptions/MealOptions";

const OrderMealPage: FC = () => {
  return (
    <section>
      <OrderMealForm />
      <MealOptions />
    </section>
  );
};

export default OrderMealPage;
