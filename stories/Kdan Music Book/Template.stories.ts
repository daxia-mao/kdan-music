import type { Meta, StoryObj } from "@storybook/react";
import Template from "./Template";

const meta: Meta<typeof Template> = {
  title: "Kdan Music/Template",
  component: Template,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Template>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
