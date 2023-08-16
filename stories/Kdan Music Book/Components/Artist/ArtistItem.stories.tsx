import type { Meta, StoryObj } from "@storybook/react";
import { ArtistItem } from ".";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

const ArtistItemWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "64tJ2EAv1R6UaZqc4iOCyj",
  });

  if (artist) {
    return <ArtistItem artist={artist} />;
  }
};

const meta: Meta<typeof ArtistItemWithHooks> = {
  title: "Kdan Music/Artist Item",
  component: ArtistItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof ArtistItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
