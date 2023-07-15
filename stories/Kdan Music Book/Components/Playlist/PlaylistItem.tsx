import { PlaylistObject } from "@/stories/Kdan Music Book/types";
import EmptyImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyAlbum.png";
import { useColor } from "color-thief-react";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import Card from "@/stories/Kdan Music Book/styled/Card.styled";
import Link from "next/link";

export interface PlaylistItemProps {
  playlist: PlaylistObject;
}

function PlaylistItem({ playlist }: PlaylistItemProps) {
  const ImageSrc = playlist.images[0]?.url ?? EmptyImageSrc;

  const { data: color } = useColor(ImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const normalHslColor = makeHsl(hsl, [1, 1, 1]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Card.Wrapper style={{ backgroundColor: normalHslColor }}>
      <Card.Image
        src={ImageSrc}
        alt={`Playlist ${playlist.name} image`}
        width={160}
        height={160}
        quality={100}
        borderRadius="8px"
      />
      <Card.Info>
        <Card.Title>
          <Link href={``}>{playlist.name}</Link>
        </Card.Title>
        <Card.Type style={{ backgroundColor: darkHslColor }}>
          合輯
        </Card.Type>
      </Card.Info>
    </Card.Wrapper>
  );
}

export default PlaylistItem;
