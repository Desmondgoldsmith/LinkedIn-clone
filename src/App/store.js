import { configureStore } from '@reduxjs/toolkit';
import countReducer from "./Slice/countReducer"
export const store = configureStore({
  reducer: {
    counter : countReducer,
  },
});