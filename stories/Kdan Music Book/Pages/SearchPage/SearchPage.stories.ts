import type { Meta, StoryObj } from "@storybook/react";
import { SearchPageWithHooks } from ".";

const meta: Meta<typeof SearchPageWithHooks > = {
  title: "Kdan Music/Search Page",
  component: SearchPageWithHooks ,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen'
  },
};

export default meta;

type Story = StoryObj<typeof SearchPageWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
