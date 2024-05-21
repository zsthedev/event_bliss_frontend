import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export const server = "https://event-bliss-backend.onrender.com/api/v1";
