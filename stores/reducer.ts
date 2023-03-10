import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";

const reducer = combineReducers({
  profile,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
