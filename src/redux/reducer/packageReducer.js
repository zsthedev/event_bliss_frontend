import { createReducer } from "@reduxjs/toolkit";

export const packageReducer = createReducer(
  {},
  {
    createPackageRequest: (state, action) => {
      state.loading = true;
    },
    createPackageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createPackageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllPackagesRequest: (state, action) => {
      state.loading = true;
    },
    getAllPackagesSuccess: (state, action) => {
      state.loading = false;
      state.deals = action.payload.deals;
    },

    getAllPackagesFail: (state, action) => {
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
