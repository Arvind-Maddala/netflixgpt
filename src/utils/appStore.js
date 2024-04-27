import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: langReducer,
  },
});
export default appStore;
