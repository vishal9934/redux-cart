import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    showData: (state) => {
      state.value = state.value;
    },
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
    // incrementByTypedValue: (state, action) => {
    //   state.value = state.value + action.payload;
    // },
  },
});
export const { showData,increment,incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;