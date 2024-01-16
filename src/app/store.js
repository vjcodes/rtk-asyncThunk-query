import { configureStore } from "@reduxjs/toolkit";
import gitUserSlice from "../features/gitUserSlice";

export const store = configureStore({
  reducer: {
    app: gitUserSlice
  },
});
