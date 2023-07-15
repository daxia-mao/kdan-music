import type { Meta, StoryObj } from "@storybook/react";
import { PlaylistItemWithHooks } from "@/stories/Kdan Music Book/Components/Playlist";
const meta: Meta<typeof PlaylistItemWithHooks> = {
  title: "Kdan Music/Playlist Item",
  component: PlaylistItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof PlaylistItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
