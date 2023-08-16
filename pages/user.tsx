import UserPage from "@/stories/Kdan Music Book/Pages/UserPage";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

export default function Personal({}: Props) {
  const auth = useAppSelector((state) => state.authReducer.auth);
  const router = useRouter();
  useEffect(() => {
    if (auth.status === "failed") {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [auth]);

  if (auth.status === "idle" || auth.status === "loading") {
    return (
      <>
        <Head>
          <title>個人 - 凱鈿音樂</title>
        </Head>
        <Page.Wrapper className="!flex justify-center item-center">
          <Header.Wrapper>
            <Header.Subtitle>載入中！</Header.Subtitle>
          </Header.Wrapper>
        </Page.Wrapper>
      </>
    );
  }

  if (auth.status === "failed") {
    return (
      <>
        <Head>
          <title>個人 - 凱鈿音樂</title>
        </Head>
        <Page.Wrapper className="!flex justify-center item-center">
          <Header.Wrapper>
            <Header.Subtitle>請先登入！</Header.Subtitle>
          </Header.Wrapper>
        </Page.Wrapper>
      </>
    );
  }

  if (auth.status === "success") {
    return (
      <>
        <Head>
          <title>個人 - 凱鈿音樂</title>
        </Head>
        <UserPage />
      </>
    );
  }
}
