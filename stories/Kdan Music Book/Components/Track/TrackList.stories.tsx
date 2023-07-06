import type { Meta, StoryObj } from "@storybook/react";
import { TrackListWithHooks } from ".";

const meta: Meta<typeof TrackListWithHooks> = {
  title: "Kdan Music/Track List",
  component: TrackListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof TrackListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
