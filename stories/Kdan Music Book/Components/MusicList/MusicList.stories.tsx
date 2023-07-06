import type { Meta, StoryObj } from "@storybook/react";
import MusicList from ".";
import { TrackObject } from "@/stories/Kdan Music Book/types";

const meta: Meta<typeof MusicList> = {
  title: "Kdan Music/Music List",
  component: MusicList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MusicList>;

const SampleTracks: TrackObject[] = [...Array(8)].map<TrackObject>(
  (_, index) => {
    return {
      id: `${index}`,
      name: "Music Name",
      preview_url: '',
      artists: [
        {
          id: `${index}`,
          name: "Artist Name",
          images: [],
        },
      ],
      album: {
        id: `${index}`,
        name: 'Album Name',
        images: [],
        artists:[]
      },
    };
  }
);

export const Default: Story = {
  name: "默認 Default",
  args: {
    tracks: SampleTracks
  },
};
