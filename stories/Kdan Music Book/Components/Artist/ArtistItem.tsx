import Link from "next/link";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import { useColor } from "color-thief-react";
import Card from "@/stories/Kdan Music Book/styled/Card.styled";
import { ArtistItemProps } from "@/stories/Kdan Music Book/Components/Artist";
import { makeHsl } from "@/stories/Kdan Music Book/utils";

function ArtistItem({ artist }: ArtistItemProps) {
  const artistImageSrc = artist.images[0]?.url ?? EmptyArtistImageSrc;

  const { data: color } = useColor(artistImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const normalHslColor = makeHsl(hsl, [1, 1, 1]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Card.Wrapper style={{ backgroundColor: normalHslColor }}>
      <Card.Image
        src={artistImageSrc}
        alt={`${artist.name} image`}
        width={160}
        height={160}
        quality={100}
      />
      <Card.Info>
        <Card.Title>
          <Link href={`/artist/${artist.id}`}>{artist.name}</Link>
        </Card.Title>
        <Card.Type style={{ backgroundColor: darkHslColor }}>藝人</Card.Type>
      </Card.Info>
    </Card.Wrapper>
  );
}

export default ArtistItem;
