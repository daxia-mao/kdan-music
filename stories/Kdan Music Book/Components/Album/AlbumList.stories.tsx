import { AlbumListWithHooks } from "@/stories/Kdan Music Book/Components/Album";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof AlbumListWithHooks> = {
  title: "Kdan Music/Album List",
  component: AlbumListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof AlbumListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
