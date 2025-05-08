import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { expect, test, vi, afterEach } from 'vitest';
import Button from '../Button';

afterEach(() => {
	vi.clearAllMocks();
	vi.resetAllMocks();
	vi.restoreAllMocks();
	cleanup();
	document.body.innerHTML = '';
});

test('should render', () => {
	render(<Button>Test</Button>);

	const button = screen.getAllByText('Test')[0];
	expect(button).toBeInstanceOf(HTMLElement);
});

test('should call the onClick handler when clicked', () => {
	const onClick = vi.fn();
	render(<Button onClick={onClick}>Test</Button>);

	fireEvent.click(screen.getAllByText('Test')[0]);
	expect(onClick).toHaveBeenCalled();
});
