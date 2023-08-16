import React from "react";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { TrackObject } from "@/stories/Kdan Music Book/types";
import { ArtistList } from "@/stories/Kdan Music Book/Components/Artist";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

export interface TrackOfArtistsProps {
  track: TrackObject;
}

export default function TrackOfArtists({ track }: TrackOfArtistsProps) {
  const { data: artists } = fetchHooks.useGetSeveralArtistsByIds({
    artistIds: track.artists.map((artist) => artist.id),
  });
  if (artists) {
    console.log(track);
    return (
      <Page.Section>
        <Page.Title>演出者</Page.Title>
        <ArtistList artists={artists} />
      </Page.Section>
    );
  }
}
