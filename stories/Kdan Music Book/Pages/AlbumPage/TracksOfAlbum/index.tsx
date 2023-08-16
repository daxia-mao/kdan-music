import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";
import React from "react";

type TracksOfAlbumProps = {
  album: SimplifiedAlbumObject;
};

function TracksOfAlbum({ album }: TracksOfAlbumProps) {
  const { data: tracks } = fetchHooks.useGetTracksOfAlbum({
    albumId: album.id,
    limit: 20,
  });

  if (tracks) {
    return (
      <Page.Section>
        <Page.Title>專輯中的曲目</Page.Title>
        <TrackList tracks={tracks} />
      </Page.Section>
    );
  }
}

export default TracksOfAlbum;
