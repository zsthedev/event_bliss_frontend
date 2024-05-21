import axios from "axios";
import { server } from "../store";

export const createRequest =
  (date, event, decor, numberOfPeople, food) => async (dispatch) => {
    try {
      dispatch({ type: "createReqRequest" });

      const { data } = await axios.post(
        `${server}/create_request`,
        {
          date,
          event,
          decor,
          numberOfPeople,
          food,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch({ type: "createReqSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "createReqFail", payload: error.response.data.message });
    }
  };

export const getMyRequests = () => async (dispatch) => {
  try {
    dispatch({ type: "getMyReqRequest" });

    const { data } = await axios.get(
      `${server}/my_requests`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getMyReqSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getMyReqFail", payload: error.response.data.message });
  }
};
