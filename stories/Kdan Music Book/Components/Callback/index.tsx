import {
  useAppDispatch,
  useAppSelector,
} from "@/stories/Kdan Music Book/app/hooks";
import { login } from "@/stories/Kdan Music Book/features/auth/authSlice";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import React, { useEffect } from "react";

type CallbackProps = {
  code: string;
};

function Callback({ code }: CallbackProps) {
  const isLogin = useAppSelector((state) => state.authReducer.isLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (code) {
      dispatch(login(code));
    }
  }, [isLogin]);

  if (isLogin) {
    return (
      <main className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
        <Header.Wrapper>
          <Header.Subtitle>登入成功！</Header.Subtitle>
        </Header.Wrapper>
      </main>
    );
  } else {
    return (
      <main className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
        <Header.Wrapper>
          <Header.Subtitle>登入中，請稍後‧‧‧</Header.Subtitle>
        </Header.Wrapper>
      </main>
    );
  }
}

export default Callback;
