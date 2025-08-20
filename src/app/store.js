import { configureStore } from "@reduxjs/toolkit";
import dessertReducer from "./features/dessertsSlice";

export const store = configureStore({
  reducer: {
    desserts: dessertReducer,
  },
});
