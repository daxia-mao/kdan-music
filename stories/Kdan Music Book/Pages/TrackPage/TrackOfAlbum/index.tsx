import React from "react";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { TrackObject } from "@/stories/Kdan Music Book/types";
import { AlbumItem } from "@/stories/Kdan Music Book/Components/Album";

export interface TrackOfAlbumProps {
  track: TrackObject;
}

export default function TrackOfAlbum({ track }: TrackOfAlbumProps) {
  if (track) {
    return (
      <Page.Section>
        <Page.Title>來自此張專輯</Page.Title>
        <AlbumItem album={track.album} />
      </Page.Section>
    );
  }
}
