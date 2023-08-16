import ArtistPage from "@/stories/Kdan Music Book/Pages/ArtistPage";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

export function ArtistPageWithHooks() {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <ArtistPage artist={artist} />;
  }
}

const meta: Meta<typeof ArtistPageWithHooks> = {
  title: "Kdan Music/Artist Page",
  component: ArtistPageWithHooks,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ArtistPageWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
