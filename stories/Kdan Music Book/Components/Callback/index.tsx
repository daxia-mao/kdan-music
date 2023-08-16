import {
  useAppDispatch,
  useAppSelector,
} from "@/stories/Kdan Music Book/app/hooks";
import { auth } from "@/stories/Kdan Music Book/features/auth/authSlice";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import React, { useEffect } from "react";

type CallbackProps = {
  code: string;
};

function Callback({ code }: CallbackProps) {
  const authState = useAppSelector((state) => state.authReducer.auth.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(auth({ code }));
  }, []);

  if (authState === "idle" || authState === "loading") {
    return (
      <main className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
        <Header.Wrapper>
          <Header.Subtitle>登入中，請稍後‧‧‧</Header.Subtitle>
        </Header.Wrapper>
      </main>
    );
  }

  if (authState === "failed") {
    return (
      <main className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
        <Header.Wrapper>
          <Header.Subtitle>登入失敗！</Header.Subtitle>
        </Header.Wrapper>
      </main>
    );
  }

  if (authState === "success") {
    return (
      <main className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
        <Header.Wrapper>
          <Header.Subtitle>登入成功！</Header.Subtitle>
        </Header.Wrapper>
      </main>
    );
  }
}

export default Callback;
