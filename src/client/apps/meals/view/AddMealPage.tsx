import { FC } from "react";
import { useSelector } from "react-redux";

import AddMealForm from "../components/AddMealForm/AddMealForm";
import Header from "../../../shared/components/Header/Header";
import Container from "../../../shared/components/Container/Container";
import { meals, commonInputFields } from "../../../shared/helpers/meals";
import {
  fetchSingleMeal,
  closeModal,
} from "../../../shared/redux/actions/mealsAction";
import { RootState } from "../../../shared/redux/reducers";
import Loading from "../../../shared/components/Loading/Loading";
import Modal from "../../../shared/components/Modal/Modal";

const AddMealPage: FC = () => {
  const { loading, openModal, createdMeal, error } = useSelector(
    (state: RootState) => state.meals
  );

  console.log(Boolean(createdMeal));

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
      {openModal && (
        <Modal
          {...{ closeModal }}
          content={
            Object.getOwnPropertyNames(createdMeal).length ? createdMeal : error
          }
          heading={
            Object.getOwnPropertyNames(createdMeal).length ? "Success" : "Error"
          }
          title={
            Object.getOwnPropertyNames(createdMeal).length
              ? "Created Successfully!"
              : "Oops! Error"
          }
        />
      )}
    </>
  );
};

export default AddMealPage;
