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

export const getAllRequests = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllReqRequest" });

    const { data } = await axios.get(
      `${server}/requests`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getAllReqSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAllReqFail", payload: error.response.data.message });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });

    const { data } = await axios.get(
      `${server}/admin/users`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getAllUsersSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAllUsersFail", payload: error.response.data.message });
  }
};

export const assignReq = (reqId, venId) => async (dispatch) => {
  try {
    dispatch({ type: "assignReqRequest" });

    const { data } = await axios.put(
      `${server}/assign/${reqId}/${venId}`,
      {},

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "assignReqSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "assignReqFail", payload: error.response.data.message });
  }
};

export const updateReqStatus = (id) => async (dispatch) => {
  try {
    dispatch({ type: "updateReqStatusRequest" });

    const { data } = await axios.put(
      `${server}/update_req_status/${id}`,
      {},

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "updateReqStatusSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateReqStatusFail",
      payload: error.response.data.message,
    });
  }
};

export const getReqDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getReqDetailsRequest" });

    const { data } = await axios.get(
      `${server}/request/${id}`,
   

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getReqDetailsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getReqDetailsFail",
      payload: error.response.data.message,
    });
  }
};
