import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import Button from '../Button';

describe('Button', () => {
	it('should render', () => {
		render(<Button>Test</Button>);

		const button = screen.getByText('Test');
		expect(button).toBeInstanceOf(HTMLElement);
	});
});
