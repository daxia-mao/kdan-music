import React from "react";
import { RelatedArtistsProps } from "..";
import ArtistList from "@/stories/Kdan Music Book/Components/Artist/ArtistList";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";

export const RelatedArtists = ({ artist }: RelatedArtistsProps) => {
  const { data: artists } = fetchHooks.useGetRelatedArtistsById({
    artistId: artist.id,
  });

  if (artists) {
    return (
      <div className="p-12 flex flex-col gap-6 bg-gray-800">
        <Page.Title>與 {artist.name} 相似的藝人</Page.Title>
        <ArtistList artists={artists} />
      </div>
    );
  }
};
