import type { Meta, StoryObj } from '@storybook/react';
import MusicPreview from ".";

const meta: Meta<typeof MusicPreview> = {
  title: 'Kdan Music/Music Preview',
  component: MusicPreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

type Story = StoryObj<typeof MusicPreview> ;

export const Default: Story = {
  name: '默認 Default',
  args: {
    
  }
}
