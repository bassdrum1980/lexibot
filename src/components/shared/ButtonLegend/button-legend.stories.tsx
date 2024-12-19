import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLegend } from './button-legend';
import { BUTTON_SIZES, BUTTON_STYLES, BUTTON_WIDTHS } from 'components';
import { StorybookBgContainer } from 'components';

type Story = StoryObj<typeof ButtonLegend>;

const meta: Meta<typeof ButtonLegend> = {
  title: 'Components / Button w Legend',
  component: ButtonLegend,
  parameters: {
    controls: {
      include: ['size', 'btnStyle'],
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: BUTTON_SIZES,
    },
    // убрать
    btnStyle: {
      control: 'select',
      options: BUTTON_STYLES,
    },
  },
};

export const Legend: Story = {
  args: {
    legend: '3 days',
    width: BUTTON_WIDTHS[1],
    btnStyle: BUTTON_STYLES[2],
    size: BUTTON_SIZES[1],
  },
  render: (args) => (
    <StorybookBgContainer>
      <ButtonLegend {...args}>Difficult</ButtonLegend>
    </StorybookBgContainer>
  ),
};

export default meta;
