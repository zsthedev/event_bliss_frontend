import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  { isAuthenticated: false },
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    addToCartRequest: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addToCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

<<<<<<< HEAD
    chatAIRequest: (state) => {
      state.loading = true;
    },
    chatAISuccess: (state, action) => {
      state.loading = false;
      // state.message = action.payload.message;
    },
    chatAIFail: (state, action) => {
      state.loading = false;
      // state.error = action.payload;
    },

=======
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
    removeFromCartRequest: (state) => {
      state.loading = true;
    },
    removeFromCartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    removeFromCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    makeCartEmptyRequest: (state) => {
      state.loading = true;
    },
    makeCartEmptySuccess: (state, action) => {
      state.loading = false;
    },
    makeCartEmptyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    approveVendorRequest: (state) => {
      state.loading = true;
    },
    approveVendorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    approveVendorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createReviewRequest: (state) => {
      state.loading = true;
    },
    createReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createReviewFail: (state, action) => {
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

export const profileReducer = createReducer(
  {},
  {
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProfilePictureRequest: (state) => {
      state.loading = true;
    },
    updateProfilePictureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfilePictureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    forgetPasswordRequest: (state) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removeFromPlaylistRequest: (state) => {
      state.loading = true;
    },
    removeFromPlaylistSuccess: (state, action) => {
      state.message = action.payload.message;
      state.loading = false;
    },
    removeFromPlaylistFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const subscriptionReducer = createReducer(
  {},
  {
    eventPaymentRequest: (state) => {
      state.loading = true;
    },
    eventPaymentSuccess: (state, action) => {
      state.loading = false;
      state.sessionId = action.payload.sessionId;
      state.requestId = action.payload.requestId;
    },
    eventPaymentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    cartCheckoutRequest: (state) => {
      state.loading = true;
    },
    cartCheckoutSuccess: (state, action) => {
      state.loading = false;
      state.csessionId = action.payload.sessionId;
    },
    cartCheckoutFail: (state, action) => {
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
