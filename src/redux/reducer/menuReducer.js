import { createReducer } from "@reduxjs/toolkit";

export const menuReducer = createReducer(
  {},
  {
    getAllMenuRequest: (state, action) => {
      state.loading = true;
    },

    getAllMenuSuccess: (state, action) => {
      state.loading = false;
      state.menu = action.payload;
    },

    getAllMenuFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createFoodRequest: (state, action) => {
      state.loading = true;
    },

    createFoodSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    createFoodFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateFoodRequest: (state, action) => {
      state.loading = true;
    },

    updateFoodSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    updateFoodFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteFoodRequest: (state, action) => {
      state.loading = true;
    },

    deleteFoodSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    getCartRequest: (state) => {
      state.loading = true;
    },
    getCartSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    },
    getCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteFoodFail: (state, action) => {
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
