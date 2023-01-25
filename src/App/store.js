import { configureStore } from '@reduxjs/toolkit';
import countReducer from "../Slices/countReducer"
export const store = configureStore({
  reducer: {
    counter : countReducer,
  },
});