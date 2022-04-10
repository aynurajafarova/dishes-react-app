import { FC } from "react";

import AddMealForm from "../components/AddMealForm/AddMealForm";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";
import { meals, commonInputFields } from "../../../shared/helpers/meals";
import { fetchSingleMeal } from "../../../shared/redux/actions/mealsAction";

const AddMealPage: FC = () => {
  return (
    <main>
      <Container>
        <Header className="center" title="Food order form" />
        <AddMealForm {...{ meals, fetchSingleMeal, commonInputFields }} />
      </Container>
    </main>
  );
};

export default AddMealPage;
