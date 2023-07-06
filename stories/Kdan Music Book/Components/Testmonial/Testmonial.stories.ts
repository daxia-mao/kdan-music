import type { Meta, StoryObj } from '@storybook/react';
import Testmonial from '.';
import AvatarSrcList from '@/stories/Kdan Music Book/assets/Testmonials/Avatar';

const meta: Meta<typeof Testmonial> = {
  title: 'Kdan Music/Testmonial',
  component: Testmonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

// 定義一個故事的型別，將 Task 的型別作為參數傳入到 StoryObj 泛型型別中，並推導出的。
type Story = StoryObj<typeof Testmonial> ;
// 預測的流程應該會是： 開發者定義 Task.stories.ts -> Storybook 解析元件的故事檔案 -> 在 Storybook 上顯示該元件
export const Default: Story = {
  name: 'Default',
  args: {
    testmonialText: `The sounds from WavesCo is great and it really helps our team to save time and production costs.`,
    avatarSrc: AvatarSrcList[0],
    userName: `Anne Joyce`,
    userJobTitle: `Video editor at Dude Perfect`
  }
}
