import { IMealData } from "./../../../shared/models/meal";
import apiClient from "../../../shared/helpers/apiClient";

export const postNewMeal = async (data: IMealData) => {
  return await apiClient().post("dishes", data);
};
