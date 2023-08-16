import type { Meta, StoryObj } from "@storybook/react";
import { TrackList } from ".";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

function TrackListWithHooks() {
  const { data: recommendationObj } = fetchHooks.useGetRecommendations({
    limit: 50,
    seed_tracks: ["7ovUcF5uHTBRzUpB6ZOmvt"],
    seed_artists: ["64tJ2EAv1R6UaZqc4iOCyj"],
    seed_genres: [],
  });
  const tracks = recommendationObj;

  if (tracks) {
    return <TrackList tracks={tracks} />;
  }
}

const meta: Meta<typeof TrackListWithHooks> = {
  title: "Kdan Music/Track List",
  component: TrackListWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof TrackListWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
