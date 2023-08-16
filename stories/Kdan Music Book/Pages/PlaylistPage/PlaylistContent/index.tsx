import {
  TrackItem,
  TrackList,
} from "@/stories/Kdan Music Book/Components/Track";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { PlaylistObject } from "@/stories/Kdan Music Book/types";
import { track } from "@vercel/analytics/react";
import React from "react";

type PlaylistContentProps = {
  playlist: PlaylistObject;
};

function PlaylistContent({ playlist }: PlaylistContentProps) {
  const tracks = playlist.tracks.items.map((item) => item.track);
  return (
    <Page.Section>
      <Page.Title>{playlist.name} 中的曲目</Page.Title>
      <TrackList tracks={tracks} />
    </Page.Section>
  );
}

export default PlaylistContent;
