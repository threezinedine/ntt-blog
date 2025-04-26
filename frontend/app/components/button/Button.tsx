import React from 'react';
import ButtonProps from './ButtonProps';
import clsx from 'clsx';

function Button({ children, onClick, style = 'primary' }: ButtonProps) {
	const commonStyle: string = clsx(
		'rounded',
		'focus:ring-opacity-50',
		'focus:ring-2',
		'transition-colors',
		'focus:outline-none',
		'hover:cursor-pointer',
		'inline-block',
		'user-select-none',
		'px-4',
		'py-2',
	);

	const styleClasses: string = clsx(
		style == 'primary' &&
			clsx(
				'bg-blue-500',
				'text-white',
				'hover:bg-blue-600',
				'focus:ring-blue-500',
			),
		style == 'secondary' &&
			clsx(
				'bg-gray-200',
				'text-gray-800',
				'hover:bg-gray-300',
				'focus:ring-gray-500',
			),
		style == 'success' &&
			clsx(
				'bg-green-500',
				'text-white',
				'hover:bg-green-600',
				'focus:ring-green-500',
			),
		style == 'danger' &&
			clsx(
				'bg-red-500',
				'text-white',
				'hover:bg-red-600',
				'focus:ring-red-500',
			),
		style == 'warning' &&
			clsx(
				'bg-yellow-500',
				'text-white',
				'hover:bg-yellow-600',
				'focus:ring-yellow-500',
			),
		style == 'info' &&
			clsx(
				'bg-indigo-500',
				'text-white',
				'hover:bg-indigo-600',
				'focus:ring-indigo-500',
			),
		style == 'outline' &&
			clsx(
				'border-2',
				'border-blue-500',
				'text-blue-500',
				'hover:bg-blue-50',
				'focus:ring-blue-500',
			),
		style == 'link' &&
			clsx(
				'bg-purple-500',
				'text-white',
				'hover:bg-purple-600',
				'focus:ring-purple-500',
			),
	);

	return (
		<div className={clsx(commonStyle, styleClasses)} onClick={onClick}>
			{children}
		</div>
	);
}

export default Button;
