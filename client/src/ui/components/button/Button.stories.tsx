import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	tags: ['autodocs'],
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

export const Primary: Story = {
	args: {
		children: 'Button',
		style: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
		style: 'secondary',
	},
};

export const Success: Story = {
	args: {
		children: 'Button',
		style: 'success',
	},
};

export const Danger: Story = {
	args: {
		children: 'Button',
		style: 'danger',
	},
};

export const Warning: Story = {
	args: {
		children: 'Button',
		style: 'warning',
	},
};

export const Info: Story = {
	args: {
		children: 'Button',
		style: 'info',
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		style: 'outline',
	},
};

export const Link: Story = {
	args: {
		children: 'Button',
		style: 'link',
	},
};

export const Small: Story = {
	args: {
		children: 'Button',
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		children: 'Button',
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		children: 'Button',
		size: 'large',
	},
};

export const Full: Story = {
	args: {
		children: 'Button',
		size: 'full',
	},
};

export const Rounded: Story = {
	args: {
		children: 'Button',
		shape: 'rounded',
	},
};

export const Square: Story = {
	args: {
		children: 'Button',
		shape: 'square',
	},
};

export const Pill: Story = {
	args: {
		children: 'Button',
		shape: 'pill',
	},
};
