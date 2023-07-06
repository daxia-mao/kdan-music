import type { Meta, StoryObj } from "@storybook/react";
import { TrackItemWithHooks } from ".";

const meta: Meta<typeof TrackItemWithHooks > = {
  title: "Kdan Music/Track Item",
  component: TrackItemWithHooks ,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof TrackItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
