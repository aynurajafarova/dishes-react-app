import apiClient from "../../../shared/helpers/apiClient";

export const postNewMeal = async (data: any) => {
  return await apiClient().post("dishes", data);
};
