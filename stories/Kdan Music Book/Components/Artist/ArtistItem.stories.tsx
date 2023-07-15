import type { Meta, StoryObj } from "@storybook/react";
import { ArtistItemWithHooks } from ".";

const meta: Meta<typeof ArtistItemWithHooks> = {
  title: "Kdan Music/Artist Item",
  component: ArtistItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof ArtistItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
