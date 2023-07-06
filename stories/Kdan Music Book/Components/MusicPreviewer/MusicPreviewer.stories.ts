import type { Meta, StoryObj } from "@storybook/react";
import MusicPreviewer from ".";

const meta: Meta<typeof MusicPreviewer> = {
  title: "Kdan Music/MusicPreviewer",
  component: MusicPreviewer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MusicPreviewer>;

export const Default: Story = {
  name: "默認 Default",
  args: {
    track: {
      id: "1",
      name: "Music Name",
      artists: [
        {
          id: "1",
          name: "Artist Name",
          images: []
        },
      ],
      album: {
        id: "1",
        name: "Album Name",
        images: [],
        artists:[]
      },
      preview_url: "",
    },
  },
};
