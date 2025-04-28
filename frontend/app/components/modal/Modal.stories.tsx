import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { ModalMethods } from './ModalProps';
import React, { useRef } from 'react';
import Button from '@/app/components/button';
import clsx from 'clsx';

const ModalContent = ({
	children,
	modalContentClassName,
}: {
	children: React.ReactNode;
	modalContentClassName: string;
}) => {
	const ref = useRef<ModalMethods>(null);

	return (
		<div>
			<Modal ref={ref} modalContentClassName={modalContentClassName}>
				{children}
			</Modal>
			<Button onClick={() => ref.current?.open()}>Open Modal</Button>
		</div>
	);
};

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	tags: ['autodocs'],
	component: ModalContent,
};

export default meta;

type Story = StoryObj<typeof ModalContent>;

export const Default: Story = {
	args: {
		children: <div className={clsx('text-black')}>Modal Content</div>,
		modalContentClassName: clsx('flex', 'items-center', 'justify-center'),
	},
};
