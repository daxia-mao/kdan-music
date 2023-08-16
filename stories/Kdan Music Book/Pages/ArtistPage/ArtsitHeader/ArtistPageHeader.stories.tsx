import ArtsitHeader from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtsitHeader";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

export const ArtistHeaderWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "1YtYHaWLV0IU7SwhvG6Luk",
  });

  if (artist) {
    return <ArtsitHeader artist={artist} />;
  }
};

const meta: Meta<typeof ArtistHeaderWithHooks> = {
  title: "Kdan Music/Artist Page Header",
  component: ArtistHeaderWithHooks,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ArtistHeaderWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
