import { ArtistPage } from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtistPage";
import { ArtistPopularTracks } from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtistPopularTracks/ArtistPopularTracks";
import { ArtsitHeader } from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtsitHeader/ArtsitHeader";
import { RelatedArtists } from "@/stories/Kdan Music Book/Pages/ArtistPage/RelatedArtists/RelatedArtists";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { SimplifiedArtistObject, TrackObject } from "@/stories/Kdan Music Book/types";
import React from "react";


export interface ArtistHeaderProps {
  artist: SimplifiedArtistObject;
}
export interface ArtistPopularTracksProps {
  tracks: TrackObject[];
}
export interface RelatedArtistsProps {
  artist: SimplifiedArtistObject;
}
export interface ArtistPageProps {
  artist: SimplifiedArtistObject;
}

const ArtistHeaderWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "1YtYHaWLV0IU7SwhvG6Luk",
  });

  if (artist) {
    return <ArtsitHeader artist={artist} />;
  }
};

const ArtistPopularTracksWithHooks = () => {
  const { data: tracks } = fetchHooks.useGetArtistTopTracks({
    artistId: "1YtYHaWLV0IU7SwhvG6Luk",
    market: "TW",
  });

  if (tracks) {
    return <ArtistPopularTracks tracks={tracks} />;
  }
};

const RelatedArtistsWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <RelatedArtists artist={artist} />;
  }
};

function ArtistPageWithHooks() {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <ArtistPage artist={artist} />;
  }
}

export {
  ArtsitHeader,
  ArtistPopularTracks,
  RelatedArtists,
  ArtistPage,
  ArtistHeaderWithHooks,
  ArtistPopularTracksWithHooks,
  RelatedArtistsWithHooks,
  ArtistPageWithHooks,
};
