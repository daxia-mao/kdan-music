import React from "react";
import { useColor } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import { PlaylistObject } from "@/stories/Kdan Music Book/types";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import PlaylistHeader from "@/stories/Kdan Music Book/Pages/PlaylistPage/PlaylistHeader";
import PlaylistContent from "@/stories/Kdan Music Book/Pages/PlaylistPage/PlaylistContent";

type PlaylistPageProps = {
  playlist: PlaylistObject;
};

export default function PlaylistPage({ playlist }: PlaylistPageProps) {
  const ImageSrc = playlist.images[0]?.url ?? EmptyArtistImageSrc;

  const { data: color } = useColor(ImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Page.Wrapper style={{ backgroundColor: darkHslColor ?? "#22223b" }}>
      <PlaylistHeader playlist={playlist} />
      <PlaylistContent playlist={playlist} />
    </Page.Wrapper>
  );
}
