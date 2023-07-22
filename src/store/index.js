// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tableReducer from "../features/table/tableSlice";
import customModalTableReducer from "../features/modal/customModalTableSlice";
import loginReducer from "../features/loginData/loginDataSlice";
// import otherReducer from '../features/other/otherSlice';

const rootReducer = combineReducers({
  table: tableReducer,
  customModalTable: customModalTableReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
