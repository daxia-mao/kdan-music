import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta: Meta<typeof Footer> = {
  title: 'Kdan Music/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

type Story = StoryObj<typeof Footer> ;
export const Default: Story = {
  name: 'Default',
  args: {

  }
}
