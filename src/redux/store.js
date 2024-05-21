import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";
import { menuReducer } from "./reducer/menuReducer";
import { eventReducer } from "./reducer/eventReducer";
import { decorReducer } from "./reducer/decorReducer";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    event: eventReducer,
    decor: decorReducer,
  },
});
export const server = "https://event-bliss-backend.onrender.com/api/v1";
