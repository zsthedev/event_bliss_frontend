import axios from "axios";
import { server } from "../store";

export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllEventsRequest" });

    const { data } = await axios.get(
      `${server}/events`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "getAllEventsSuccess", payload: data.events });
  } catch (error) {
    dispatch({ type: "getAllEventsFail", payload: error.response.data.message });
  }
};

export const createEvent = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createEventRequest" });

    const { data } = await axios.post(`${server}/create_event`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "createEventSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "createEventFail", payload: error.response.data.message });
  }
};


export const updateEvent = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: "updateEventRequest" });

    const { data } = await axios.put(`${server}/update_event/${id}`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "updateEventSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "updateEventFail", payload: error.response.data.message });
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteEventRequest" });

    const { data } = await axios.delete(`${server}/delete_event/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    });

    dispatch({ type: "deleteEventSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteEventFail", payload: error.response.data.message });
  }
};