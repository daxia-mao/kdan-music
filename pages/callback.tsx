import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Callback from "@/stories/Kdan Music Book/Components/Callback";

type CallbackPageProps = {};

function CallbackPage({}: CallbackPageProps) {
  const router = useRouter();
  const vertifyCode = router.query.code as string;
  const authState = useAppSelector((state) => state.authReducer.auth.status);

  if(authState === 'success' || authState === 'failed') {
    setTimeout(() => {
      router.push('/')
    }, 2000);
  }

  if (vertifyCode) {
    return <Callback code={vertifyCode} />;
  }
}

export default CallbackPage;
