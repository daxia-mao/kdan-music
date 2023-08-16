import React from "react";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { TrackItem } from "@/stories/Kdan Music Book/Components/Track";
import { TrackObject } from "@/stories/Kdan Music Book/types";

export interface TrackPreviewProps {
  track: TrackObject;
}

export default function TrackPreview({ track }: TrackPreviewProps) {
  if (track) {
    return (
      <Page.Section>
        <Page.Title>試聽歌曲</Page.Title>
        <TrackItem track={track} />
      </Page.Section>
    );
  }
}
