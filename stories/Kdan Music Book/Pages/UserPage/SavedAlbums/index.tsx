import { AlbumList } from "@/stories/Kdan Music Book/Components/Album";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";

type SavedAlbumsProps = {};

export function SavedAlbums({}: SavedAlbumsProps) {
  const userAlbums = useAppSelector(
    (state) => state.userReducer.user.library.albums
  );

  if (userAlbums) {
    const albums = userAlbums.map((item) => item.album);

    return (
      <Page.Section>
        <Page.Title>收藏的專輯</Page.Title>
        <AlbumList albums={albums} />
      </Page.Section>
    );
  }
}

export default SavedAlbums;
