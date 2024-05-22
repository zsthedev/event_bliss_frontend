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

    getAllReqRequest: (state, action) => {
      state.loading = true;
    },
    getAllReqSuccess: (state, action) => {
      state.loading = false;
      state.requests = action.payload.requests;
    },

    getAllReqFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllUsersRequest: (state, action) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },

    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    assignReqRequest: (state, action) => {
      state.loading = true;
    },
    assignReqSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    assignReqFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateReqStatusRequest: (state, action) => {
      state.loading = true;
    },
    updateReqStatusSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    updateReqStatusFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getReqDetailsRequest: (state, action) => {
      state.loading = true;
    },
    getReqDetailsSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.details = action.payload.details;
    },

    getReqDetailsFail: (state, action) => {
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
