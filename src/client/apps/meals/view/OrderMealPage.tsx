import { FC } from "react";

import OrderMealForm from "../components/OrderMealForm/OrderMealForm";
import MealOptions from "../components/MealOptions/MealOptions";
import Header from "../../../shared/components/Header/Header";

const OrderMealPage: FC = () => {
  return (
    <main>
      <Header title="Are you hungry?" />
      <OrderMealForm />
      <MealOptions />
    </main>
  );
};

export default OrderMealPage;
