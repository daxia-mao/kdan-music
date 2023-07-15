import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/stories/Kdan Music Book/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
