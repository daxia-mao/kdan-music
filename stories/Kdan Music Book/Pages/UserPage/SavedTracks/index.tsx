import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";

type SavedTracksProps = {};

export function SavedTracks({}: SavedTracksProps) {
  const { data: savedTracks } = fetchHooks.useGetMySavedTracks({
    limit: 20,
  });

  if (savedTracks) {
    const tracks = savedTracks.map((item) => item.track);
    return (
      <Page.Section>
        <Page.Title>個人音樂庫</Page.Title>
        <TrackList tracks={tracks} />
      </Page.Section>
    );
  }
}

export default SavedTracksProps;
