import React from "react";
import { useColor } from "color-thief-react";
import EmptyImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import { TrackObject } from "@/stories/Kdan Music Book/types";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import TrackHeader from "@/stories/Kdan Music Book/Pages/TrackPage/TrackHeader";
import TrackPreview from "@/stories/Kdan Music Book/Pages/TrackPage/TrackPreview";
import TrackOfAlbum from "@/stories/Kdan Music Book/Pages/TrackPage/TrackOfAlbum";
import RecommendationOfTrackPage from "@/stories/Kdan Music Book/Pages/TrackPage/RecommendationOfTrackPage";
import TrackOfArtists from "@/stories/Kdan Music Book/Pages/TrackPage/TrackOfArtists";

type TrackPageProps = {
  track: TrackObject;
};

export default function TrackPage({ track }: TrackPageProps) {
  const ImageSrc = track.album.images[0]?.url ?? EmptyImageSrc;

  const { data: color } = useColor(ImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Page.Wrapper style={{ backgroundColor: darkHslColor ?? "#22223b" }}>
      <TrackHeader track={track} />
      <TrackPreview track={track} />
      <TrackOfArtists track={track} />
      <TrackOfAlbum track={track} />
      <RecommendationOfTrackPage track={track} />
    </Page.Wrapper>
  );
}
