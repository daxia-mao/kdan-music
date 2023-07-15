import React from "react";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { AlbumList } from "@/stories/Kdan Music Book/Components/Album";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";

export interface ArtistAlbumsProps {
  artist: SimplifiedArtistObject;
}

export default function ArtistAlbums({ artist }: ArtistAlbumsProps) {
  const { data: albums } = fetchHooks.useGetAlbumsByArtist({
    artistId: artist.id,
    include_groups: ["album"],
    limit: 21,
  });

  if (albums) {
    return (
      <Page.Section>
        <Page.Title>{artist.name} 的所有專輯</Page.Title>
        <AlbumList albums={albums} />
      </Page.Section>
    );
  }
}
