import axios from "axios";
import { server } from "../store";
export const getAllMenu = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllMenuRequest" });

    const { data } = await axios.get(
      `${server}/menu`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getAllMenuSuccess", payload: data.menu });
  } catch (error) {
    dispatch({ type: "getAllMenuFail", payload: error.response.data.message });
  }
};

export const createFood = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createFoodRequest" });

    const { data } = await axios.post(`${server}/create_food`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "createFoodSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "createFoodFail", payload: error.response.data.message });
  }
};


export const updateFood = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: "updateFoodRequest" });

    const { data } = await axios.put(`${server}/update_food/${id}`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "updateFoodSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "updateFoodFail", payload: error.response.data.message });
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteFoodRequest" });

    const { data } = await axios.delete(`${server}/delete_food/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    });

    dispatch({ type: "deleteFoodSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteFoodFail", payload: error.response.data.message });
  }
};