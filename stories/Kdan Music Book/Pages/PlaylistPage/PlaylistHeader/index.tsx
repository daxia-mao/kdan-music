import React from "react";
import { usePalette } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import { PlaylistObject } from "@/stories/Kdan Music Book/types";
import { RiSpotifyFill } from "react-icons/ri";
import Link from "next/link";
import { SavedButton } from "@/stories/Kdan Music Book/Components/SavedButton";

export interface PlaylistHeaderProps {
  playlist: PlaylistObject;
}

export default function PlaylistHeader({ playlist }: PlaylistHeaderProps) {
  const ImageSrc = playlist.images[0].url ?? EmptyArtistImageSrc;

  const { data: palette } = usePalette(playlist.images[0]?.url, 5, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const paletteColors =
    palette && palette.map((hsl) => makeHsl(hsl, [1, 1, 1]));

  return (
    <Header.Wrapper
      style={{
        background:
          paletteColors &&
          `linear-gradient(to bottom, ${paletteColors[0]},${paletteColors[1]})`,
      }}
    >
      <Header.Image
        src={ImageSrc}
        width={320}
        height={320}
        alt={`${playlist.name} image`}
      />
      <Header.Info>
        <Header.Title>{playlist.name}</Header.Title>
        <div className="flex gap-4 justify-center items-center">
          <SavedButton id={playlist.id} type={"playlists"} />
          <Link href={`https://open.spotify.com/playlist/${playlist.id}`}>
            <RiSpotifyFill className="text-3xl text-green-400 opacity-90" />
          </Link>
        </div>
      </Header.Info>
    </Header.Wrapper>
  );
}
