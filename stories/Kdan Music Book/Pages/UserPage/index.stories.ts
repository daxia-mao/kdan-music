import type { Meta, StoryObj } from "@storybook/react";
import PersonalPage from ".";

const meta: Meta<typeof PersonalPage> = {
  title: "Kdan Music/Personal Page",
  component: PersonalPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof PersonalPage>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
