import React, { createRef } from 'react';
import {
	render,
	screen,
	cleanup,
	waitFor,
	fireEvent,
} from '@testing-library/react';
import { expect, test, vi, afterEach } from 'vitest';
import Modal from '../Modal';
import { ModalMethods } from '../ModalProps';

afterEach(() => {
	vi.clearAllMocks();
	vi.resetAllMocks();
	vi.restoreAllMocks();
	cleanup();
	document.body.innerHTML = '';
});

test('should not render when not open', () => {
	render(<Modal>Test Modal</Modal>);

	// assert that "Test Modal" not visible
	const modal = screen.queryByText('Test Modal');
	expect(modal).toBeNull();
});

test('should render when open', async () => {
	const ref = createRef<ModalMethods>();
	render(<Modal ref={ref}>Test Modal</Modal>);

	ref.current?.open();

	await waitFor(() => {
		expect(screen.getByText('Test Modal')).toBeInstanceOf(HTMLElement);
	});
});

test('should close when the close method is called', async () => {
	const ref = createRef<ModalMethods>();
	render(<Modal ref={ref}>Test Modal</Modal>);

	ref.current?.open();

	await waitFor(() => {
		expect(screen.getByText('Test Modal')).toBeInstanceOf(HTMLElement);
	});

	ref.current?.close();

	await waitFor(() => {
		expect(screen.queryByText('Test Modal')).toBeNull();
	});
});

test('should close the modal when clicking outside the modal-content', async () => {
	const ref = createRef<ModalMethods>();
	render(<Modal ref={ref}>Test Modal</Modal>);

	ref.current?.open();

	await waitFor(() => {
		expect(screen.getByText('Test Modal')).toBeInstanceOf(HTMLElement);
	});

	fireEvent.click(screen.getByTestId('modal-background'));

	await waitFor(() => {
		expect(screen.queryByText('Test Modal')).toBeNull();
	});
});

test('should not close the modal when clicking inside the modal-content', async () => {
	const ref = createRef<ModalMethods>();
	render(<Modal ref={ref}>Test Modal</Modal>);

	ref.current?.open();

	await waitFor(() => {
		expect(screen.getByText('Test Modal')).toBeInstanceOf(HTMLElement);
	});

	fireEvent.click(screen.getByTestId('modal-content'));

	await waitFor(() => {
		expect(screen.getByText('Test Modal')).toBeInstanceOf(HTMLElement);
	});
});

test('should call the onOpen and onClose methods when the modal is opened and closed', async () => {
	const onOpen = vi.fn();
	const onClose = vi.fn();
	const ref = createRef<ModalMethods>();
	render(
		<Modal ref={ref} onOpen={onOpen} onClose={onClose}>
			Test Modal
		</Modal>,
	);

	ref.current?.open();

	await waitFor(() => {
		expect(onOpen).toHaveBeenCalled();
	});

	ref.current?.close();

	await waitFor(() => {
		expect(onClose).toHaveBeenCalled();
	});
});
