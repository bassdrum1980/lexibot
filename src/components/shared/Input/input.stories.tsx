import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { StorybookBgContainer } from 'components';
import { createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Components / Shared / Input',
  component: Input,
  parameters: {
    controls: {
      include: ['isInvalid'],
    },
  },
  argTypes: {
    isInvalid: {
      control: 'boolean',
    },
  },
};

export const InputField: Story = {
  args: {
    isInvalid: false,
    defaultValue: 'Default Value',
  },
  render: (args) => (
    <StorybookBgContainer>
      <Input {...args}>Primary</Input>
    </StorybookBgContainer>
  ),
};

export default meta;
