import { FC } from "react";

import OrderMealForm from "../components/OrderMealForm/OrderMealForm";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";
import { meals } from "../../../shared/helpers/meals";
import { fetchSingleMeal } from "../../../shared/redux/actions/mealsAction";

const OrderMealPage: FC = () => {
  return (
    <main>
      <Container>
        <Header className="center" title="Food order form" />
        <OrderMealForm {...{ meals, fetchSingleMeal }} />
      </Container>
    </main>
  );
};

export default OrderMealPage;
