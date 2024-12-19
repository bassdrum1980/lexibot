import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup as FormGroupComponent } from './form-group';
import { StorybookBgContainer, Input } from 'components';

type Story = StoryObj<typeof FormGroupComponent>;

const meta: Meta<typeof FormGroupComponent> = {
  title: 'Components / Shared / Form Group',
  component: FormGroupComponent,
  parameters: {
    controls: {
      include: ['isRequired', 'isValid'],
    },
  },
  argTypes: {
    isRequired: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
    },
  },
};

export const FormGroup: Story = {
  args: {
    isRequired: false,
    isValid: true,
    label: 'Label',
    validationText: 'Note',
  },
  render: (args) => (
    <StorybookBgContainer>
      <FormGroupComponent {...args}>
        <Input
          name="input"
          type="text"
          placeholder="Placeholder Value"
          onChange={() => console.log('input changed')}
        />
      </FormGroupComponent>
    </StorybookBgContainer>
  ),
};

export default meta;
