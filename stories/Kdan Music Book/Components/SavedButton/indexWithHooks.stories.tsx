import type { Meta, StoryObj } from "@storybook/react";
import { SavedButton } from "@/stories/Kdan Music Book/Components/SavedButton";

const meta: Meta<typeof SavedButton> = {
  title: "Kdan Music/Saved Button With Hooks",
  component: SavedButton,
  tags: ["autodocs"],
  parameters: {},
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SavedButton>;

export const Default: Story = {
  name: "Default 默認",
  args: {},
};
