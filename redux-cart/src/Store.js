import { configureStore } from "@reduxjs/toolkit";
import SliceCart from "./SliceCart"

export const Store = configureStore({
  reducer: {
    AllCart : SliceCart,
  },
});