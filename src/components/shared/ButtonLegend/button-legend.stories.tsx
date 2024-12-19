import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLegend } from './button-legend';
import { BUTTON_SIZES, BUTTON_STYLES, BUTTON_WIDTHS } from 'components';
import { StorybookBgContainer } from 'components';

type Story = StoryObj<typeof ButtonLegend>;

const meta: Meta<typeof ButtonLegend> = {
  title: 'Components / Shared / Button w Legend',
  component: ButtonLegend,
  parameters: {
    controls: {
      include: ['size', 'btnStyle'],
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
    btnStyle: {
      control: 'select',
      options: [
        BUTTON_STYLES.PRIMARY,
        BUTTON_STYLES.SECONDARY,
        BUTTON_STYLES.TERTIARY,
        BUTTON_STYLES.PLAIN,
        BUTTON_STYLES.DESTRUCTIVE,
        BUTTON_STYLES.LINK,
        BUTTON_STYLES.PSEUDO,
        BUTTON_STYLES.ICON,
      ],
    },
  },
};

export const Legend: Story = {
  args: {
    legend: '3 days',
    width: BUTTON_WIDTHS.HUG,
    btnStyle: BUTTON_STYLES.TERTIARY,
    size: BUTTON_SIZES.SMALL_MEDIUM,
  },
  render: (args) => (
    <StorybookBgContainer>
      <ButtonLegend {...args}>Difficult</ButtonLegend>
    </StorybookBgContainer>
  ),
};

export default meta;
