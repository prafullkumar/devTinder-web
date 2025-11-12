import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
const appStore = configureStore({
  reducer: { userInfo: useReducer },
});

export default appStore;
