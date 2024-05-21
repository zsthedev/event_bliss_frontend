import { createReducer } from "@reduxjs/toolkit";

export const requestReducer = createReducer(
  {},
  {
    createReqRequest: (state, action) => {
      state.loading = true;
    },
    createReqSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createReqFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getMyReqRequest: (state, action) => {
      state.loading = true;
    },
    getMyReqSuccess: (state, action) => {
      state.loading = false;
      state.requests = action.payload.events;
    },

    getMyReqFail: (state, action) => {
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
