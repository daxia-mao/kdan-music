import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Kdan Music/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

// 定義一個故事的型別，將 Task 的型別作為參數傳入到 StoryObj 泛型型別中，並推導出的。
type Story = StoryObj<typeof Navbar> ;
// 預測的流程應該會是： 開發者定義 Task.stories.ts -> Storybook 解析元件的故事檔案 -> 在 Storybook 上顯示該元件

export const Default: Story = {
  name: '默認 Default',
  args: {
    
  }
}
