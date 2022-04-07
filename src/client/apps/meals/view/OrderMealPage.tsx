import { FC, useState } from "react";

import OrderMealForm from "../components/OrderMealForm/OrderMealForm";
import MealOptions from "../components/MealOptions/MealOptions";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";
import { mealOptions } from "../../../shared/helpers/meals";
import { IMealOption } from "../../../shared/models/meal";

const OrderMealPage: FC = () => {
  const [mealId, setMealId] = useState<string>(mealOptions[0]?.id);

  const findMeal = (mealId: string) => {
    const newArr: IMealOption[] = mealOptions.filter(
      (item: IMealOption) => item.id === mealId
    );
    console.log(newArr);
  };

  console.log(mealId);

  return (
    <main>
      <Container>
        <Header className="center" title="Food order form" />
        <OrderMealForm />
        <MealOptions {...{ mealOptions, findMeal, setMealId }} />
      </Container>
    </main>
  );
};

export default OrderMealPage;
