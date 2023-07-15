import { fetchers } from "@/stories/Kdan Music Book/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isLogin: boolean;
};

const initialState: AuthState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      localStorage.removeItem("personal_token");
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      localStorage.setItem("personal_token", action.payload.access_token);
    });
  },
});

export const login = createAsyncThunk("auth/login", async (code: string) => {
  return fetchers.fetchPersonalToken(code);
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
