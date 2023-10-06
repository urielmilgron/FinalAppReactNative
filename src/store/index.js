import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../services/shopApi";
import { marketSlice } from "../features/shop/shopSlice";

const store = configureStore({
  reducer: {
    shop: marketSlice,
    [shopApi.reducerPath]:shopApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware)
});

setupListeners(store.dispatch)

export default store
