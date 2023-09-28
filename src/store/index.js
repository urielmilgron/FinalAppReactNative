import { configureStore } from "@reduxjs/toolkit";
import { marketSlice } from "../slice/shop/shopSlice";
import counterSlice from "../slice/counter/counterSlice";

export const store = configureStore({
  reducer: {
    shop: marketSlice,
    counter: counterSlice
  },
});
