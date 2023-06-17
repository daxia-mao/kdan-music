import React from "react";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import Button from "./Button";
import { useGetPopularCategoriesQuery } from "./features/api/apiSlice";

type PopularCategoriesProps = {};

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const CategoriesContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Heading = styled.div`
  ${(props) => props.theme.typography.getHeading({ level: 4 })};
  color: ${(props) => props.theme.colors.titleDark};
`;

const PopularCategoriesWrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 60px 100px;

  ${CategoriesContanier} {
    margin-bottom: 20px;
  }
  ${CategoriesWrapper} {
    max-width: 1042px;
  }
  ${Heading} {
    margin-bottom: 23px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 40px 60px;
    ${CategoriesContanier} {
      margin-bottom: 15px;
    }
    ${CategoriesWrapper} {
      max-width: 648px;
      gap: 16px;
    }
    ${Heading} {
      ${(props) => props.theme.typography.getHeading({ level: 5 })};
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 30px 16px;
    ${CategoriesContanier} {
      margin-bottom: 16px;
    }
    ${CategoriesWrapper} {
      max-width: 288px;
      gap: 10px;
    }
    ${Heading} {
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }
  }
`;

function PopularCategories({}: PopularCategoriesProps) {
  const {
    data: categoryInfoList,
    isError,
    isLoading,
  } = useGetPopularCategoriesQuery();

  const LoadingContent = () => {
    return [...Array(12)].map((_, index) => (
      <CategoryItem
        key={index}
        id={`${index}`}
        name={""}
        iconSrc={""}
        isLoading={isLoading}
      />
    ));
  };

  const CategoriesContent =
    categoryInfoList &&
    categoryInfoList.map((categoryInfo) => (
      <CategoryItem
        key={categoryInfo.id}
        id={categoryInfo.id}
        name={categoryInfo.name}
        iconSrc={categoryInfo.icons[0].url}
      />
    ));

  return (
    <PopularCategoriesWrapper>
      <Heading>在 Spotify 中最熱門的分類</Heading>
      <CategoriesContanier>
        <CategoriesWrapper>
          {isLoading && <LoadingContent />}
          {CategoriesContent}
        </CategoriesWrapper>
      </CategoriesContanier>
      <Button variant="secondary" size="small">
        See all category
      </Button>
    </PopularCategoriesWrapper>
  );
}

export default PopularCategories;
