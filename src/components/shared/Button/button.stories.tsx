import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export const Primary: Story = {
  //render: () => <Button>Button</Button>,
  args: {
    children: 'Click me',
    type: 'button',
    btnStyle: 'tertiary',
  },
};

export default meta;
