import type { Meta, StoryObj } from "@storybook/react";
import { ArtistPageWithHooks } from ".";

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
