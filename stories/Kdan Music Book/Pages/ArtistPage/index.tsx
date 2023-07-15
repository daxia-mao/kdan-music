import React from "react";
import { useColor } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import ArtsitHeader from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtsitHeader";
import ArtistPopularTracks from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtistPopularTracks";
import ArtistAlbums from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtistAlbums";
import RelatedArtists from "@/stories/Kdan Music Book/Pages/ArtistPage/RelatedArtists";
import RecommendationOfArtistPage from "@/stories/Kdan Music Book/Pages/ArtistPage/RecommendationOfArtistPage";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";

type ArtistPageProps = {
  artist: SimplifiedArtistObject;
};

export const ArtistHeaderWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "1YtYHaWLV0IU7SwhvG6Luk",
  });

  if (artist) {
    return <ArtsitHeader artist={artist} />;
  }
};

export const ArtistPopularTracksWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <ArtistPopularTracks artist={artist} />;
  }
};

export const RelatedArtistsWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <RelatedArtists artist={artist} />;
  }
};

export function ArtistPageWithHooks() {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <ArtistPage artist={artist} />;
  }
}

export default function ArtistPage({ artist }: ArtistPageProps) {
  const artistImageSrc = artist.images[0]?.url ?? EmptyArtistImageSrc;

  const { data: color } = useColor(artistImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Page.Wrapper style={{ backgroundColor: darkHslColor ?? "#22223b" }}>
      <ArtsitHeader artist={artist} />
      <ArtistPopularTracks artist={artist} />
      <ArtistAlbums artist={artist} />
      <RelatedArtists artist={artist} />
      <RecommendationOfArtistPage artist={artist} />
    </Page.Wrapper>
  );
}
