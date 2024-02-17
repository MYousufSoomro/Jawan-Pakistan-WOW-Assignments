import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userData from "./slices/userData";
import theme from "./slices/theme";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData,
    theme,
  },
});
