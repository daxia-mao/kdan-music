import type { Meta, StoryObj } from '@storybook/react';
import PopularCategories from './PopularCategories';
import { Provider } from 'react-redux';

const meta: Meta<typeof PopularCategories> = {
  title: 'Kdan Music/Popular Categories',
  component: PopularCategories,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta;

type Story = StoryObj<typeof PopularCategories> ;

export const Default: Story = {
  name: '默認 Default',
  args: {

  }
}
