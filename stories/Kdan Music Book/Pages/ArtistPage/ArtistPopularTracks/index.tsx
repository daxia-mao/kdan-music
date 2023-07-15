import React from "react";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";

export interface ArtistPopularTracksProps {
  artist: SimplifiedArtistObject;
}

export default function ArtistPopularTracks({
  artist,
}: ArtistPopularTracksProps) {
  const { data: tracks } = fetchHooks.useGetArtistTopTracks({
    artistId: artist.id,
    market: "TW",
  });
  if (tracks) {
    return (
      <Page.Section>
        <Page.Title>{artist.name} 的熱門曲目</Page.Title>
        <TrackList tracks={tracks} />
      </Page.Section>
    );
  }
}
