import SearchPage from "@/stories/Kdan Music Book/Pages/SearchPage";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

const SearchPageWithHooks = () => {
  const { data: searchResult } = fetchHooks.useGetSearchItems({
    q: "Amazaroshi",
    limit: 10,
  });

  if (searchResult) {
    return <SearchPage query={"...."} searchItems={searchResult} />;
  }
};

const meta: Meta<typeof SearchPageWithHooks> = {
  title: "Kdan Music/Search Page",
  component: SearchPageWithHooks,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SearchPageWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
