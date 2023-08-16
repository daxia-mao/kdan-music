import { AlbumItem } from "@/stories/Kdan Music Book/Components/Album";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

function AlbumItemWithHooks() {
  const { data: album } = fetchHooks.useGetAlbumById({
    albumId: "3CcrISxzIwT6ZGplop5E5c",
  });

  if (album) {
    return <AlbumItem album={album} />;
  }
}

const meta: Meta<typeof AlbumItemWithHooks> = {
  title: "Kdan Music/Album Item",
  component: AlbumItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof AlbumItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
