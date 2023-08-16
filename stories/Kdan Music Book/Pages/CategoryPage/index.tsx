import React from "react";
import { useColor } from "color-thief-react";
import EmptyArtistImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import { CategoryObject } from "@/stories/Kdan Music Book/types";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import CategoryHeader from "@/stories/Kdan Music Book/Pages/CategoryPage/CategoryHeader";
import CategoryContent from "@/stories/Kdan Music Book/Pages/CategoryPage/CategoryContent";

type CategoryPageProps = {
  category: CategoryObject;
};

export default function CategoryPage({ category }: CategoryPageProps) {
  const ImageSrc = category.icons[0]?.url ?? EmptyArtistImageSrc;

  const { data: color } = useColor(ImageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  return (
    <Page.Wrapper style={{ backgroundColor: darkHslColor ?? "#22223b" }}>
      <CategoryHeader category={category} />
      <CategoryContent category={category} />
    </Page.Wrapper>
  );
}
