import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: { showSearch: false },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { toggleGPTSearch } = gptSlice.actions;

export default gptSlice.reducer;
