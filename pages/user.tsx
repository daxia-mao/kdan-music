import UserPage from "@/stories/Kdan Music Book/Pages/UserPage";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

export default function Personal({}: Props) {
  const isLogin = useAppSelector((state) => state.authReducer.isLogin);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [router.isReady]);
  if (!isLogin) {
    return (
      <>
        <Head>
          <title>個人 - 凱鈿音樂</title>
        </Head>
        <Page.Wrapper>
          <Header.Wrapper>
            <Header.Subtitle>登入後才可以使用歐☺ ! </Header.Subtitle>
            <Header.Subtitle>回到首頁中 ···</Header.Subtitle>
          </Header.Wrapper>
        </Page.Wrapper>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>個人 - 凱鈿音樂</title>
      </Head>
      <UserPage />
    </>
  );
}
