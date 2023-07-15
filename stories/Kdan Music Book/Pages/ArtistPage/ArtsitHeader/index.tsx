import React from "react";
import { usePalette } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";
import { RiHeartLine, RiSpotifyFill } from "react-icons/ri";
import Link from "next/link";

export interface ArtistHeaderProps {
  artist: SimplifiedArtistObject;
}

export default function ArtsitHeader({ artist }: ArtistHeaderProps) {
  const artistImageSrc = artist.images[0]?.url ?? EmptyArtistImageSrc;

  const { data: palette } = usePalette(artist.images[0]?.url, 5, "hslArray", {
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
        src={artistImageSrc}
        width={320}
        height={320}
        alt={`${artist.name} image`}
      />
      <Header.Info>
        <Header.Title>{artist.name}</Header.Title>
        <div className="flex gap-4 justify-center items-center relative px-6 py-2">
          <div className="absolute min-w-full min-h-full bg-slate-900 opacity-30 "></div>
          <RiHeartLine className="text-3xl  text-red-500  opacity-90" />
          <Link href={`https://open.spotify.com/artist/${artist.id}`}>
            <RiSpotifyFill className="text-3xl text-green-400 opacity-90" />
          </Link>
        </div>
      </Header.Info>
    </Header.Wrapper>
  );
}
