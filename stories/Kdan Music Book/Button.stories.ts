import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Kdan Music/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryLargeBtn: Story = {
  name: "Primary Large Button",
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Button",
  },
};
export const PrimarySmallBtn: Story = {
  name: "Primary Small Button",
  args: {
    variant: "primary",
    size: "small",
    children: "Primary Button",
  },
};
export const SecondaryLargeBtn: Story = {
  name: "Secondary Large Button",
  args: {
    variant: "secondary",
    size: "large",
    children: "Secondary Button",
  },
};
export const SecondarySmallBtn: Story = {
  name: "Secondary Small Button",
  args: {
    variant: "secondary",
    size: "small",
    children: "Secondary Button",
  },
};
export const TertiaryLargeBtn: Story = {
  name: "Tertiary Large Button",
  args: {
    variant: "tertiary",
    size: "large",
    children: "Tertiary Button",
  },
};
export const TertiarySmallBtn: Story = {
  name: "Tertiary Small Button",
  args: {
    variant: "tertiary",
    size: "small",
    children: "Tertiary Button",
  },
};
