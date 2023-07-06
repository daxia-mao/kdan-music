import type { Meta, StoryObj } from "@storybook/react";
import { ArtistListWithHooks } from ".";

const meta: Meta<typeof ArtistListWithHooks> = {
  title: "Kdan Music/Artist List",
  component: ArtistListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof ArtistListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
