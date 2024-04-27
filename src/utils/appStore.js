import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
export default appStore;
