import { configureStore } from "@reduxjs/toolkit";
import { authReducer, subscriptionReducer } from "./reducer/authReducer";
import { menuReducer } from "./reducer/menuReducer";
import { eventReducer } from "./reducer/eventReducer";
import { decorReducer } from "./reducer/decorReducer";
import { requestReducer } from "./reducer/requestReducer";
import { packageReducer } from "./reducer/packageReducer";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    event: eventReducer,
    decor: decorReducer,
    requests: requestReducer,
    payment: subscriptionReducer,
    package: packageReducer,
  },
});
export const server = "https://event-bliss-backend.onrender.com/api/v1";
