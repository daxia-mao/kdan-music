import Recommendation from "@/stories/Kdan Music Book/Components/Recommendation";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";
import React from "react";

type RecommendationOfArtistPageProps = {
  artist: SimplifiedArtistObject;
};

export default function RecommendationOfArtistPage({
  artist,
}: RecommendationOfArtistPageProps) {
  const { data: artistTopTracks } = fetchHooks.useGetArtistTopTracks({
    artistId: artist.id,
  });

  if (artistTopTracks) {
    const seedOfTracks = artistTopTracks.slice(0, 2).map((track) => track.id);
    const seedOfGenres = artist.genres ? artist.genres.slice(0, 2) : [];
    return (
      <Page.Section>
        <Page.Title>根據此頁推薦</Page.Title>
        <Recommendation
          limit={20}
          seed={{
            artists: [artist.id],
            genres: seedOfGenres,
            tracks: seedOfTracks,
          }}
        />
      </Page.Section>
    );
  }
}
