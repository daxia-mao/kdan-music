import Recommendation from "@/stories/Kdan Music Book/Components/Recommendation";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";
import React from "react";

type RecommendationOfTrackPageProps = {
  album: SimplifiedAlbumObject;
};

export default function RecommendationOfAlbumPage({
  album,
}: RecommendationOfTrackPageProps) {
  const { data: tracks } = fetchHooks.useGetTracksOfAlbum({
    albumId: album.id,
    limit: 3,
  });
  if (album && tracks) {
    const seedOfTracks = tracks.map((track) => track.id).slice(0, 4);
    const seedOfArtists = album.artists.map((artist) => artist.id).slice(0, 1);
    console.log(seedOfTracks, seedOfArtists);
    return (
      <Page.Section>
        <Page.Title>根據此頁推薦</Page.Title>
        <Recommendation
          limit={20}
          seed={{
            artists: seedOfArtists,
            genres: [],
            tracks: seedOfTracks,
          }}
        />
      </Page.Section>
    );
  }
}
