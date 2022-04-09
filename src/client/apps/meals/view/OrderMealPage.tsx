import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import OrderMealForm from "../components/OrderMealForm/OrderMealForm";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";
import { meals } from "../../../shared/helpers/meals";
import { fetchSingleMeal } from "../../../shared/redux/actions/mealsAction";

const OrderMealPage: FC = () => {
  const [mealId, setMealId] = useState<string>(meals[0]?.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMeal(meals, mealId));
  }, [dispatch, mealId]);

  return (
    <main>
      <Container>
        <Header className="center" title="Food order form" />
        <OrderMealForm {...{ meals, setMealId }} />
      </Container>
    </main>
  );
};

export default OrderMealPage;
