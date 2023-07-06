import React from "react";
import { SearchPage } from "./SearchPage";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { SearchObject } from "@/stories/Kdan Music Book/types";

export type SearchPageProps = {
  query: string;
  searchItems: SearchObject;
};

const SearchPageWithHooks = () => {
  const { data: searchResult } = fetchHooks.useGetSearchItems({
    q: "Amazaroshi",
    limit: 10,
  });

  if (searchResult) {
    return <SearchPage query={"...."} searchItems={searchResult} />;
  }
};

export { SearchPage, SearchPageWithHooks };
