import { PlaylistList } from "@/stories/Kdan Music Book/Components/Playlist";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";

type SavedPlaylistsProps = {};

export function SavedPlaylists({}: SavedPlaylistsProps) {
  const userPlaylists = useAppSelector(
    (state) => state.userReducer.user.library.playlists
  );

  if (userPlaylists) {
    return (
      <Page.Section>
        <Page.Title>您的合輯</Page.Title>
        <PlaylistList playlists={userPlaylists} />
      </Page.Section>
    );
  }
}

export default SavedPlaylists;
