import { ArtistList } from "@/stories/Kdan Music Book/Components/Artist";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";

type SavedArtistsProps = {};

export function SavedArtists({}: SavedArtistsProps) {
  const userArtists = useAppSelector(
    (state) => state.userReducer.user.library.artists
  );

  if (userArtists) {
    return (
      <Page.Section>
        <Page.Title>關注的藝人</Page.Title>
        <ArtistList artists={userArtists} />
      </Page.Section>
    );
  }
}

export default SavedArtists;
