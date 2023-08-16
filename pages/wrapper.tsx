import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { useAppDispatch } from "@/stories/Kdan Music Book/app/hooks";
import { reAuth } from "@/stories/Kdan Music Book/features/auth/authSlice";

function Wrapper({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const check = async () => {
      dispatch(reAuth());
    };
    check();
  }, []);
  return <Component {...pageProps} />;
}

export default Wrapper;
