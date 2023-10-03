import Button from "@/stories/Kdan Music Book/Components/Button";
import CategoryItem from "@/stories/Kdan Music Book/Components/CategoryItem";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import S from "./index.styled";
import U from "@/stories/Kdan Music Book/styled/Utils.styled";
import React from "react";
import Link from "next/link";

type PopularCategoriesProps = {};

function PopularCategories({}: PopularCategoriesProps) {
  const {
    data: categories,
    isLoading,
    error,
  } = fetchHooks.useGetPopularCategories({
    limit: 12,
    country: "JP",
  });
  if (error) {
    return (
      <S.Wrapper>
        <S.Heading>在 Spotify 中最熱門的分類</S.Heading>
        <U.Error />
      </S.Wrapper>
    );
  }
  if (isLoading) {
    return (
      <S.Wrapper>
        <S.Heading>在 Spotify 中最熱門的分類</S.Heading>
        <U.Loading />
      </S.Wrapper>
    );
  }
  if (categories) {
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
        <Link href={`/categories`}>
          <Button variant="secondary" size="small">
            See all category
          </Button>
        </Link>
      </S.Wrapper>
    );
  }
}

export default PopularCategories;
