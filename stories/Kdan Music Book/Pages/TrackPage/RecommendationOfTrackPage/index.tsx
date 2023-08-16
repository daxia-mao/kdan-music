import Recommendation from "@/stories/Kdan Music Book/Components/Recommendation";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { TrackObject } from "@/stories/Kdan Music Book/types";
import React from "react";

type RecommendationOfTrackPageProps = {
  track: TrackObject;
};

export default function RecommendationOfTrackPage({
  track,
}: RecommendationOfTrackPageProps) {
  if (track) {
    const seedOfTracks = [track.id];
    const seedOfArtists = track.artists.map((artist) => artist.id);
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
