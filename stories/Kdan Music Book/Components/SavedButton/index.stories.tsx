import type { Meta, StoryObj } from "@storybook/react";
import SavedButtonStyled from "@/stories/Kdan Music Book/Components/SavedButton";

const meta: Meta<typeof SavedButtonStyled> = {
  title: "Kdan Music/Saved Button",
  component: SavedButtonStyled,
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

type Story = StoryObj<typeof SavedButtonStyled>;

export const Default: Story = {
  name: "未儲存 Unsaved",
  args: {
    isSaved: false,
  },
};

export const Saved: Story = {
  name: "已儲存 Saved",
  args: {
    isSaved: true,
  },
};
