import { RelatedArtistsWithHooks } from '@/stories/Kdan Music Book/Pages/ArtistPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RelatedArtistsWithHooks> = {
  title: 'Kdan Music/Related Artists',
  component: RelatedArtistsWithHooks,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta;

type Story = StoryObj<typeof RelatedArtistsWithHooks> ;

export const Default: Story = {
  name: '默認 Default',
  args: {

  }
}
