import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import React from "react";

type RecommendationProps = {
  limit: number;
  seed: {
    artists: string[];
    genres: string[];
    tracks: string[];
  };
};

function Recommendation({ limit, seed }: RecommendationProps) {
  const { data: recommendTracks } = fetchHooks.useGetRecommendations({
    limit,
    seed_artists: seed.artists,
    seed_genres: seed.genres,
    seed_tracks: seed.tracks,
  });
  if (recommendTracks) {
    return <TrackList tracks={recommendTracks} />;
  }
}

export default Recommendation;
