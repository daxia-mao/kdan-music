import { useColor } from "color-thief-react";
import EmptyAlbumImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyAlbum.png";
import Card from "@/stories/Kdan Music Book/styled/Card.styled";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import { SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";

export type AlbumProps = {
  album: SimplifiedAlbumObject;
};

const albumType = {
  album: "專輯",
  single: "單曲",
  compilation: "合輯",
};

function AlbumItem({ album }: AlbumProps) {
  const imageSrc = album.images[0].url ?? EmptyAlbumImageSrc;

  const { data: color } = useColor(imageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const normalHslColor = makeHsl(hsl, [1, 1, 1]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Card.Wrapper style={{ backgroundColor: normalHslColor }}>
      <Card.Image
        src={imageSrc}
        width={160}
        height={160}
        alt={`album ${album.name} image`}
      />
      <Card.Info>
        <Card.Title>{album.name}</Card.Title>
        <Card.Subtitle>
          {album.artists.map((artist) => artist.name).join(", ")}
        </Card.Subtitle>
        <Card.Type style={{ backgroundColor: darkHslColor }}>
          {
            albumType[
              `${album.album_type}` as "single" | "album" | "compilation"
            ]
          }
        </Card.Type>
      </Card.Info>
    </Card.Wrapper>
  );
}

export default AlbumItem;
