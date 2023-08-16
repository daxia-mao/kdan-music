import { PlaylistList } from "@/stories/Kdan Music Book/Components/Playlist";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

const PlaylistListWithHooks = () => {
  const { data: playlists, error } = fetchHooks.useGetFeaturedPlaylists({
    country: "TW",
    limit: 50,
  });

  if (playlists) {
    return <PlaylistList playlists={playlists} />;
  }
};

const meta: Meta<typeof PlaylistListWithHooks> = {
  title: "Kdan Music/Playlist List",
  component: PlaylistListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof PlaylistListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
