import { createReducer } from "@reduxjs/toolkit";

export const decorReducer = createReducer(
  {},
  {
    getAllDecorRequest: (state, action) => {
      state.loading = true;
    },

    getAllDecorSuccess: (state, action) => {
      state.loading = false;
      state.decor = action.payload;
    },

    getAllDecorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createDecorRequest: (state, action) => {
      state.loading = true;
    },

    createDecorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createDecorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateDecorRequest: (state, action) => {
      state.loading = true;
    },

    updateDecorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    updateDecorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteDecorRequest: (state, action) => {
      state.loading = true;
    },

    deleteDecorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    deleteDecorFail: (state, action) => {
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
