import TrackItem from "@/stories/Kdan Music Book/Components/Track/TrackItem";
import TrackList from "@/stories/Kdan Music Book/Components/Track/TrackList";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { TrackObject } from "@/stories/Kdan Music Book/types";

export type TrackItemProps = {
  track: TrackObject;
};

export type TrackListProps = {
  tracks: TrackObject[];
};

function TrackItemWithHooks() {
  const { data: track } = fetchHooks.useGetTrackById({
    trackId: "0T4AitQuq8IJhWBWuZwkFA",
  });

  if (track) {
    return <TrackItem track={track} />;
  }
}

function TrackListWithHooks() {
  const { data: recommendationObj } = fetchHooks.useGetRecommendations({
    limit: 50,
    seed_tracks: ["7ovUcF5uHTBRzUpB6ZOmvt"],
    seed_artists: ["64tJ2EAv1R6UaZqc4iOCyj"],
    seed_genres: [],
  });
  const tracks = recommendationObj;

  if (tracks) {
    return <TrackList tracks={tracks} />;
  }
}

export { TrackItem, TrackList, TrackItemWithHooks, TrackListWithHooks };
