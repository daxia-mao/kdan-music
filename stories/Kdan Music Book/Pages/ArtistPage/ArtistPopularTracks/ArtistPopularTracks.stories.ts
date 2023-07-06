import { ArtistPopularTracksWithHooks } from "@/stories/Kdan Music Book/Pages/ArtistPage";
import type { Meta, StoryObj } from "@storybook/react";

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
