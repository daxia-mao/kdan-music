import ArtistPopularTracks from "@/stories/Kdan Music Book/Pages/ArtistPage/ArtistPopularTracks";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

export const ArtistPopularTracksWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "6T4K8YuFc0JPDrYgABbxao",
  });

  if (artist) {
    return <ArtistPopularTracks artist={artist} />;
  }
};

const meta: Meta<typeof ArtistPopularTracksWithHooks> = {
  title: "Kdan Music/Artist Page Popular Tracks",
  component: ArtistPopularTracksWithHooks,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ArtistPopularTracksWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
