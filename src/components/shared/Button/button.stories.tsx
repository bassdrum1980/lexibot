import type { Meta, StoryObj } from '@storybook/react';
import Button, { BUTTON_SIZES, BUTTON_WIDTHS } from './index';
import { StorybookBgContainer } from 'components';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
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

export const ButtonInDifferentBackgrounds: Story = {
  args: {
    size: BUTTON_SIZES[2],
    width: BUTTON_WIDTHS[0],
  },
  render: (args) => (
    <StorybookBgContainer>
      <Button {...args}>Button Example</Button>
    </StorybookBgContainer>
  ),
};

export default meta;
