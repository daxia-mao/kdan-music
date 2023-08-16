import React from "react";
import { usePalette } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import { CategoryObject } from "@/stories/Kdan Music Book/types";

export interface CategoryHeaderProps {
  category: CategoryObject;
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  const ImageSrc = category.icons[0].url ?? EmptyArtistImageSrc;

  const { data: palette } = usePalette(category.icons[0]?.url, 5, "hslArray", {
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
        alt={`${category.name} image`}
      />
      <Header.Info>
        <Header.Title>{category.name}</Header.Title>
      </Header.Info>
    </Header.Wrapper>
  );
}
