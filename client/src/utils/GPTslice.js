import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "GPT",
  initialState: {
    showGpt: null,
  },
  reducers: {
    toggelGptSearchView: (state, action) => {
      state.showGpt = !state.showGpt;
    },
  },
});

export const { toggelGptSearchView } = GPTslice.actions;

export default GPTslice.reducer;
