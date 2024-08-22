import type { Meta, StoryObj } from '@storybook/vue3';
import Foobar from './Foobar.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Foobar> = {
  component: Foobar,
  title: 'Foobar',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Foobar!/gi)).toBeTruthy();
  },
};
