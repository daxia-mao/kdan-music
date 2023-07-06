import Button from "@/stories/Kdan Music Book/Components/Button";
import CategoryItem from "@/stories/Kdan Music Book/Components/CategoryItem";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import S from "./index.styled";
import React from "react";

type PopularCategoriesProps = {};

function PopularCategories({}: PopularCategoriesProps) {
  const { data: categories, isLoading } = fetchHooks.useGetPopularCategories({
    limit: "12",
    country: "JP",
  });

  const CategoriesContent =
    categories &&
    categories.map((category, index) => (
      <CategoryItem
        key={category.id}
        id={category.id}
        name={category.name}
        iconSrc={category.icons[0].url}
        index={index}
      />
    ));

  return (
    <S.Wrapper>
      <S.Heading>在 Spotify 中最熱門的分類</S.Heading>
      <S.CategoriesContanier>
        <S.CategoriesWrapper>{CategoriesContent}</S.CategoriesWrapper>
      </S.CategoriesContanier>
      <Button variant="secondary" size="small">
        See all category
      </Button>
    </S.Wrapper>
  );
}

export default PopularCategories;
