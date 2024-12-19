import type { Meta, StoryObj } from '@storybook/react';
import { Button, BUTTON_SIZES, BUTTON_STYLES, BUTTON_WIDTHS } from './button';
import { StorybookBgContainer } from 'components';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components / Shared / Button',
  component: Button,
  parameters: {
    controls: {
      include: ['size', 'width'],
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [
        BUTTON_SIZES.SMALL,
        BUTTON_SIZES.SMALL_MEDIUM,
        BUTTON_SIZES.MEDIUM,
        BUTTON_SIZES.LARGE,
        BUTTON_SIZES.INLINE,
      ],
    },
    width: {
      control: 'select',
      options: [BUTTON_WIDTHS.FILL, BUTTON_WIDTHS.HUG],
    },
  },
};

export const Primary: Story = {
  args: {
    size: BUTTON_SIZES.MEDIUM,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.PRIMARY,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Primary</Button>
    </StorybookBgContainer>
  ),
};

export const Secondary: Story = {
  args: {
    size: BUTTON_SIZES.MEDIUM,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.SECONDARY,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Secondary</Button>
    </StorybookBgContainer>
  ),
};

export const Tertiary: Story = {
  args: {
    size: BUTTON_SIZES.MEDIUM,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.TERTIARY,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Tertiary</Button>
    </StorybookBgContainer>
  ),
};

export const Plain: Story = {
  args: {
    size: BUTTON_SIZES.SMALL_MEDIUM,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.PLAIN,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Plain</Button>
    </StorybookBgContainer>
  ),
};

export const Destructive: Story = {
  args: {
    size: BUTTON_SIZES.MEDIUM,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.DESTRUCTIVE,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Destructive</Button>
    </StorybookBgContainer>
  ),
};

export const Link: Story = {
  args: {
    size: BUTTON_SIZES.INLINE,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.LINK,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Link</Button>
    </StorybookBgContainer>
  ),
};

export const Pseudo: Story = {
  args: {
    size: BUTTON_SIZES.INLINE,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.PSEUDO,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Pseudo</Button>
    </StorybookBgContainer>
  ),
};

export const Icon: Story = {
  args: {
    size: BUTTON_SIZES.MEDIUM,
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.ICON,
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Icon</Button>
    </StorybookBgContainer>
  ),
};

export default meta;
