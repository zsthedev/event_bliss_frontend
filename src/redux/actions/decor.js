import axios from "axios";
import { server } from "../store";

export const getAllDecors = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllDecorRequest" });

    const { data } = await axios.get(
      `${server}/decors`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getAllDecorSuccess", payload: data.decors });
  } catch (error) {
    dispatch({ type: "getAllDecorFail", payload: error.response.data.message });
  }
};

export const createDecor = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createDecorRequest" });

    const { data } = await axios.post(`${server}/create_decor`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "createDecorSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "createDecorFail", payload: error.response.data.message });
  }
};

export const updateDecor = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: "updateDecorRequest" });

    const { data } = await axios.put(`${server}/update_decor/${id}`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "updateDecorSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "updateDecorFail", payload: error.response.data.message });
  }
};

export const deleteDecor = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteDecorRequest" });

    const { data } = await axios.delete(`${server}/delete_decor/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    });

    dispatch({ type: "deleteDecorSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteDecorFail", payload: error.response.data.message });
  }
};