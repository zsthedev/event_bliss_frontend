import { createReducer } from "@reduxjs/toolkit";

export const eventReducer = createReducer(
  {},
  {
    getAllEventsRequest: (state, action) => {
      state.loading = true;
    },

    getAllEventsSuccess: (state, action) => {
      state.loading = false;
      state.events = action.payload;
    },

    getAllEventsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createEventRequest: (state, action) => {
      state.loading = true;
    },

    createEventSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createEventFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateEventRequest: (state, action) => {
      state.loading = true;
    },

    updateEventSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    updateEventFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteEventRequest: (state, action) => {
      state.loading = true;
    },

    deleteEventSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    deleteEventFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
