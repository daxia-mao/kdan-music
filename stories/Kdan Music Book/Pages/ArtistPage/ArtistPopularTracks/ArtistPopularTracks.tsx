import React from "react";
import { ArtistPopularTracksProps } from "..";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { TrackList } from "@/stories/Kdan Music Book/Components/Track";

export const ArtistPopularTracks = ({ tracks }: ArtistPopularTracksProps) => {
  return (
    <div className="p-12 flex flex-col gap-6 bg-gray-800">
      <Page.Title>{tracks[0]?.artists[0].name} 的熱門曲目</Page.Title>
      <TrackList tracks={tracks} />
    </div>
  );
};
