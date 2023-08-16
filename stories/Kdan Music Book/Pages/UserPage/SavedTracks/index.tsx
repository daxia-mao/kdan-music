import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import React from "react";

type SavedTracksProps = {};

export function SavedTracks({}: SavedTracksProps) {
  const userTracks = useAppSelector(
    (state) => state.userReducer.user.library.tracks
  );
  
  if (userTracks) {
    const tracks = userTracks.map(item => item.track);
    return (
      <Page.Section>
        <Page.Title>個人音樂庫</Page.Title>
        <TrackList tracks={tracks} />
      </Page.Section>
    );
  }
}

export default SavedTracks;
