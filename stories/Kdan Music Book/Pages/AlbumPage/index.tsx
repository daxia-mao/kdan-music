import React from "react";
import { useColor } from "color-thief-react";
import EmptyImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import { SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import AlbumHeader from "@/stories/Kdan Music Book/Pages/AlbumPage/AlbumHeader";
import TracksOfAlbum from "@/stories/Kdan Music Book/Pages/AlbumPage/TracksOfAlbum";
import AlbumOfArtists from "@/stories/Kdan Music Book/Pages/AlbumPage/AlbumOfArtists";
import RecommendationOfAlbumPage from "@/stories/Kdan Music Book/Pages/AlbumPage/RecommendationOfAlbumPage";

type AlbumPageProps = {
  album: SimplifiedAlbumObject;
};

export default function AlbumPage({ album }: AlbumPageProps) {
  const ImageSrc = album.images[0]?.url ?? EmptyImageSrc;

  const { data: color } = useColor(ImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Page.Wrapper style={{ backgroundColor: darkHslColor ?? "#22223b" }}>
      <AlbumHeader album={album} />
      <TracksOfAlbum album={album} />
      <AlbumOfArtists album={album} />
      <RecommendationOfAlbumPage album={album} />
    </Page.Wrapper>
  );
}
