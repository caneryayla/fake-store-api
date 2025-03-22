import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import shoppingCartReducer from "./slice/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
