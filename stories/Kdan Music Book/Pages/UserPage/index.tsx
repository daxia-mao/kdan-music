import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";
import UserHeader from "@/stories/Kdan Music Book/Pages/UserPage/UserHeader";
import { SavedTracks } from "@/stories/Kdan Music Book/Pages/UserPage/SavedTracks";

type UserPageProps = {};

function UserPage({}: UserPageProps) {
  const { data: user } = fetchHooks.useGetMe();
  if (user) {
    return (
      <Page.Wrapper>
        <UserHeader user={user} />
        <SavedTracks />
      </Page.Wrapper>
    );
  }
}

export default UserPage;
