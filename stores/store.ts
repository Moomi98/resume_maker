import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
