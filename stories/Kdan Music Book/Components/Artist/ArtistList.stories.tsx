import type { Meta, StoryObj } from "@storybook/react";
import { ArtistList } from ".";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

const ArtistListWithHooks = () => {
  const { data: relatedArtists } = fetchHooks.useGetRelatedArtistsById({
    artistId: "0bdfiayQAKewqEvaU6rXCv",
  });

  if (relatedArtists) {
    return <ArtistList artists={relatedArtists} />;
  }
};

const meta: Meta<typeof ArtistListWithHooks> = {
  title: "Kdan Music/Artist List",
  component: ArtistListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof ArtistListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
