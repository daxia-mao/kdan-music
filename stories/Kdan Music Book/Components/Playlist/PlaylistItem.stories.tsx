import { PlaylistItem } from "@/stories/Kdan Music Book/Components/Playlist";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import type { Meta, StoryObj } from "@storybook/react";

const PlaylistItemWithHooks = () => {
  const { data: playlist, error } = fetchHooks.useGetPlaylist({
    pid: "37i9dQZEVXbMnZEatlMSiu",
  });

  if (playlist) {
    return <PlaylistItem playlist={playlist} />;
  }
};

const meta: Meta<typeof PlaylistItemWithHooks> = {
  title: "Kdan Music/Playlist Item",
  component: PlaylistItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof PlaylistItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
