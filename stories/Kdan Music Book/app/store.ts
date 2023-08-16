import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/stories/Kdan Music Book/features/auth/authSlice";
import userReducer from "@/stories/Kdan Music Book/features/user/userSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
