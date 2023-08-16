import { AlbumList } from "@/stories/Kdan Music Book/Components/Album";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

function AlbumListWithHooks() {
  const { data: albums } = fetchHooks.useGetAlbumsByArtist({
    artistId: "6xErgeZYatiaQ36SB5bvi8",
    limit: 20,
    include_groups: ["album"],
  });

  if (albums) {
    return <AlbumList albums={albums} />;
  }
}

const meta: Meta<typeof AlbumListWithHooks> = {
  title: "Kdan Music/Album List",
  component: AlbumListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof AlbumListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {

  },
};
