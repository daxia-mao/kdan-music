import type { Meta, StoryObj } from "@storybook/react";
import CategoryItem from "./CategoryItem";

const meta: Meta<typeof CategoryItem> = {
  title: "Kdan Music/CategoryItem",
  component: CategoryItem,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof CategoryItem>;

export const Default: Story = {
  name: "默認 Default",
  args: {
    id: '1',
    name: "Top Lists",
    iconSrc: "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
  },
};

export const Loading: Story = {
  name: "載入中 Loading",
  args: {
    id: '1',
    name: "Top Lists",
    iconSrc: "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
    isLoading: true
  },
};
