import { FC } from "react";
import { useSelector } from "react-redux";

import AddMealForm from "../components/AddMealForm/AddMealForm";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";
import { meals, commonInputFields } from "../../../shared/helpers/meals";
import { fetchSingleMeal } from "../../../shared/redux/actions/mealsAction";
import { RootState } from "../../../shared/redux/reducers";
import Loading from "../../../shared/components/Loading/Loading";
import Modal from "../../../shared/components/Modal/Modal";

const AddMealPage: FC = () => {
  const { loading } = useSelector((state: RootState) => state.meals);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <main>
            <Header className="center" title="Food order form" />
            <AddMealForm {...{ meals, fetchSingleMeal, commonInputFields }} />
          </main>
        </Container>
      )}
      <Modal heading="Success" title="Created Successfully!" />
    </>
  );
};

export default AddMealPage;
