import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: { language: "English" },
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
