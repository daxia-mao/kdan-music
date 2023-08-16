import { fetchers } from "@/stories/Kdan Music Book/api";
import { fetchAllFromLibrary } from "@/stories/Kdan Music Book/features/user/userSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type AuthState = {
  auth: {
    status: "idle" | "success" | "loading" | "failed";
  };
};

const initialState: AuthState = {
  auth: {
    status: "idle",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deAuth: (state) => {
      state.auth.status = "failed";
      localStorage.removeItem("personal_token");
    },
  },
  extraReducers(builder) {
    builder.addCase(auth.fulfilled, (state) => {
      state.auth.status = "success";
    });
    builder.addCase(auth.pending, (state) => {
      state.auth.status = "loading";
    });
    builder.addCase(auth.rejected, (state) => {
      state.auth.status = "failed";
    });
    builder.addCase(reAuth.fulfilled, (state) => {
      state.auth.status = "success";
    });
    builder.addCase(reAuth.pending, (state) => {
      state.auth.status = "loading";
    });
    builder.addCase(reAuth.rejected, (state) => {
      state.auth.status = "failed";
    });
  },
});

export const reAuth = createAsyncThunk("auth/reAuth", async (_, api) => {
  const personalToken = localStorage.getItem("personal_token");
  if (!personalToken) {
    return Promise.reject();
  }
  await fetchers.fetchMe();
  api.dispatch(fetchAllFromLibrary());
});

export const auth = createAsyncThunk(
  "auth/auth",
  async ({ code }: { code: string }, api) => {
    try {
      const res = await fetchers.fetchPersonalToken(code);
      localStorage.setItem("personal_token", res.access_token);
      api.dispatch(fetchAllFromLibrary());
    } catch (error) {}
  }
);

export const { deAuth } = authSlice.actions;
export default authSlice.reducer;
