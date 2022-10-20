import { combineReducers } from "@reduxjs/toolkit";
import customizationReducer from "./customizationReducer";

const reducer = combineReducers({ customization: customizationReducer });

export default reducer;
