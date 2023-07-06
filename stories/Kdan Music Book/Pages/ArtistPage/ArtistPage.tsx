import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { useColor } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import {
  ArtistPageProps,
  ArtsitHeader,
  ArtistPopularTracks,
  RelatedArtists,
} from "@/stories/Kdan Music Book/Pages/ArtistPage";
import { makeHsl } from "@/stories/Kdan Music Book/utils";

export function ArtistPage({ artist }: ArtistPageProps) {
  const artistImageSrc = artist.images[0]?.url ?? EmptyArtistImageSrc;

  const { data: tracks } = fetchHooks.useGetArtistTopTracks({
    artistId: artist.id,
    market: "TW",
  });

  const { data: color } = useColor(artistImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  if (tracks) {
    return (
      <div
        className="w-full min-h-screen bg-slate-950"
        style={{ backgroundColor: darkHslColor }}
      >
        <ArtsitHeader artist={artist} />
        <ArtistPopularTracks tracks={tracks} />
        <RelatedArtists artist={artist} />
      </div>
    );
  }
}
