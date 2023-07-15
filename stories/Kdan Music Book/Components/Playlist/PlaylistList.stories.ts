import { PlaylistListWithHooks } from "@/stories/Kdan Music Book/Components/Playlist";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof PlaylistListWithHooks> = {
  title: "Kdan Music/Playlist List",
  component: PlaylistListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof PlaylistListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
