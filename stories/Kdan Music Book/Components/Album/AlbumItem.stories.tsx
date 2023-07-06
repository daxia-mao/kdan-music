import { AlbumItemWithHooks } from "@/stories/Kdan Music Book/Components/Album";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlbumItemWithHooks> = {
  title: "Kdan Music/Album Item",
  component: AlbumItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof AlbumItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
