import type { Meta, StoryObj } from '@storybook/react';
import { Button, BUTTON_SIZES, BUTTON_STYLES, BUTTON_WIDTHS } from './button';
import { StorybookBgContainer } from 'components';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  parameters: {
    controls: {
      include: ['size', 'width'],
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: BUTTON_SIZES,
    },
    width: {
      control: 'select',
      options: BUTTON_WIDTHS,
    },
  },
};

export const Primary: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[0],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Primary</Button>
    </StorybookBgContainer>
  ),
};

export const Secondary: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[1],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Secondary</Button>
    </StorybookBgContainer>
  ),
};

export const Tertiary: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[2],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Tertiary</Button>
    </StorybookBgContainer>
  ),
};

export const Plain: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[3],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Plain</Button>
    </StorybookBgContainer>
  ),
};

export const Destructive: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[4],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Destructive</Button>
    </StorybookBgContainer>
  ),
};

export const Link: Story = {
  args: {
    size: BUTTON_SIZES[4],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[6],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Link</Button>
    </StorybookBgContainer>
  ),
};

export const Pseudo: Story = {
  args: {
    size: BUTTON_SIZES[4],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[7],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Pseudo</Button>
    </StorybookBgContainer>
  ),
};

export const Icon: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[8],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Icon</Button>
    </StorybookBgContainer>
  ),
};

export default meta;
