import { ArtistHeaderWithHooks } from "@/stories/Kdan Music Book/Pages/ArtistPage";
import type { Meta, StoryObj } from "@storybook/react";

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
