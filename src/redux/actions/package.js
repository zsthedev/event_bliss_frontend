import axios from "axios";
import { server } from "../store";

export const createPackage =
  (title, event, decor, numberOfPeople, price, food) => async (dispatch) => {
    try {
      dispatch({ type: "createPackageRequest" });

      const { data } = await axios.post(
        `${server}/create_package`,
        {
          title: title,
          event: event,
          decor: decor,
          numberOfPeople: numberOfPeople,
          items: food,
          price: price,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch({ type: "createPackageSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "createPackageFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllPackages = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllPackagesRequest" });

    const { data } = await axios.get(
      `${server}/packages`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getAllPackagesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllPackagesFail",
      payload: error.response.data.message,
    });
  }
};
