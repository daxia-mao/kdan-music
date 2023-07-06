import type { Meta, StoryObj } from '@storybook/react';
import Trust from ".";

const meta: Meta<typeof Trust> = {
  title: 'Kdan Music/Trust',
  component: Trust,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

type Story = StoryObj<typeof Trust> ;

export const Default: Story = {
  name: '默認 Default',
  args: {
    
  }
}
