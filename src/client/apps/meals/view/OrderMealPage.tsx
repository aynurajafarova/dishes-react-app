import { FC } from "react";

import OrderMealForm from "../components/OrderMealForm/OrderMealForm";
import MealOptions from "../components/MealOptions/MealOptions";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";

const OrderMealPage: FC = () => {
  return (
    <main>
      <Container>
        <Header className="center" title="Are you hungry?" />
        <OrderMealForm />
        <MealOptions />
      </Container>
    </main>
  );
};

export default OrderMealPage;
