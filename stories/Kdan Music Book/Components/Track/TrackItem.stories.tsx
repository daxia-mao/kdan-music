import type { Meta, StoryObj } from "@storybook/react";
import { TrackItem } from ".";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

function TrackItemWithHooks() {
  const { data: track } = fetchHooks.useGetTrackById({
    trackId: "0T4AitQuq8IJhWBWuZwkFA",
  });

  if (track) {
    return <TrackItem track={track} />;
  }
}

const meta: Meta<typeof TrackItemWithHooks> = {
  title: "Kdan Music/Track Item",
  component: TrackItemWithHooks,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof TrackItemWithHooks>;

export const Default: Story = {
  name: "默認 Default",
  args: {},
};
