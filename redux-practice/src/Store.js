import { configureStore } from "@reduxjs/toolkit";

import increment from "./Slice";

export const store = configureStore({
    reducer: {
      show:increment,
    },
  });