import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";
import UserHeader from "@/stories/Kdan Music Book/Pages/UserPage/UserHeader";
import { SavedTracks } from "@/stories/Kdan Music Book/Pages/UserPage/SavedTracks";
import SavedAlbums from "@/stories/Kdan Music Book/Pages/UserPage/SavedAlbums";
import SavedPlaylists from "@/stories/Kdan Music Book/Pages/UserPage/SavedPlaylists";
import SavedArtists from "@/stories/Kdan Music Book/Pages/UserPage/SavedArtists";

type UserPageProps = {};

function UserPage({}: UserPageProps) {
  return (
    <Page.Wrapper>
      <UserHeader />
      <SavedTracks />
      <SavedAlbums />
      <SavedArtists />
      <SavedPlaylists />
    </Page.Wrapper>
  );
}

export default UserPage;
