import CategoryItem from "@/stories/Kdan Music Book/Components/CategoryItem";
import React from "react";
import { CategoryObject } from "@/stories/Kdan Music Book/types";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";

type CategoriesProps = {
  categories: CategoryObject[];
};

function CategoriesPage({ categories }: CategoriesProps) {
  if (categories) {
    const CategoriesContent =
      categories &&
      categories.map((category, index) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          iconSrc={category.icons[0].url}
        />
      ));

    return (
      <Page.Wrapper>
        <Header.Wrapper />
        <section className="flex flex-wrap gap-4 justify-center pb-8">
          {CategoriesContent}
        </section>
      </Page.Wrapper>
    );
  }
}

export default CategoriesPage;
