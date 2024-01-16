import { configureStore } from "@reduxjs/toolkit";
import dbSlice from "./slices/dbSlice";

export default configureStore({
  reducer: {
    setUser: dbSlice,
  },
});
