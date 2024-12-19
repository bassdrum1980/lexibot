import type { Meta, StoryObj } from '@storybook/react';
import { Input as InputComponent } from './input';
import { StorybookBgContainer } from 'components';

type Story = StoryObj<typeof InputComponent>;

const meta: Meta<typeof InputComponent> = {
  title: 'Components / Shared / Input',
  component: InputComponent,
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

export const Input: Story = {
  args: {
    isInvalid: false,
    placeholder: 'Placeholder Value',
  },
  render: (args) => (
    <StorybookBgContainer>
      <InputComponent {...args}>Primary</InputComponent>
    </StorybookBgContainer>
  ),
};

export default meta;
