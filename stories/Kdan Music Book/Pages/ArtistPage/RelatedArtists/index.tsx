import React from "react";
import ArtistList from "@/stories/Kdan Music Book/Components/Artist/ArtistList";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";

export interface RelatedArtistsProps {
  artist: SimplifiedArtistObject;
}
export default function RelatedArtists({ artist }: RelatedArtistsProps) {
  const { data: artists } = fetchHooks.useGetRelatedArtistsById({
    artistId: artist.id,
  });

  if (artists) {
    return (
      <Page.Section>
        <Page.Title>與 {artist.name} 相似的藝人</Page.Title>
        <ArtistList artists={artists} />
      </Page.Section>
    );
  }
}
