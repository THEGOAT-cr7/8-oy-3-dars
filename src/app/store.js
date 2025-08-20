import { configureStore } from "@reduxjs/toolkit";
import { dessertReducer } from "./features/dessertsSlice";

const store = configureStore({
  reducer: {
    desserts: dessertReducer,
  },
});
