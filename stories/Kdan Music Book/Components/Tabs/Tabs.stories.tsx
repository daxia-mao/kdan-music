import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";
import MusicList from "./MusicList";
import { Default as MusicList_Default } from "./MusicList.stories";
const meta: Meta<typeof Tabs> = {
  title: "Kdan Music/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const SampleTracks = MusicList_Default.args?.tracks;

export const Default: Story = {
  name: "Default",
  args: {
    defaultValue: 0,
    items: [
      { id: 0, label: "All", children: <MusicList tracks={SampleTracks} /> },
      { id: 1, label: "Pop", children: <MusicList tracks={SampleTracks} /> },
      { id: 2, label: "Mood", children: <MusicList tracks={SampleTracks} /> },
      {
        id: 3,
        label: "Hip-Hop",
        children: <MusicList tracks={SampleTracks} />,
      },
      {
        id: 4,
        label: "Workout",
        children: <MusicList tracks={SampleTracks} />,
      },
      { id: 5, label: "Chill", children: <MusicList tracks={SampleTracks} /> },
      { id: 6, label: "Sleep", children: <MusicList tracks={SampleTracks} /> },
    ],
  },
};
