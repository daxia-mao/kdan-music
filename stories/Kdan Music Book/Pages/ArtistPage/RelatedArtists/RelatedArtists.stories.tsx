import RelatedArtists from "@/stories/Kdan Music Book/Pages/ArtistPage/RelatedArtists";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

export const RelatedArtistsWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <RelatedArtists artist={artist} />;
  }
};

const meta: Meta<typeof RelatedArtistsWithHooks> = {
  title: "Kdan Music/Related Artists",
  component: RelatedArtistsWithHooks,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RelatedArtistsWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
