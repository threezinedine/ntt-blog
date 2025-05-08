import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { ModalProps, ModalMethods } from './ModalProps';
import clsx from 'clsx';

const Modal = forwardRef<ModalMethods, ModalProps>(
	({ children, onClose, onOpen, modalContentClassName = '' }, ref) => {
		const [isOpen, setIsOpen] = useState(false);

		function open() {
			setIsOpen(true);
			if (onOpen) {
				onOpen();
			}
		}

		function close() {
			setIsOpen(false);
			if (onClose) {
				onClose();
			}
		}

		useImperativeHandle(ref, () => ({
			open,
			close,
		}));

		function handleBackgroundClick() {
			close();
		}

		const backgroundStyle = clsx(
			'fixed',
			'left-0',
			'right-0',
			'top-0',
			'bottom-0',
			'bg-slate-900',
			'opacity-40',
			'z-50',
		);

		const contentStyle = clsx(
			'fixed',
			'z-50',
			'p-5',
			'top-1/2',
			'left-1/2',
			'min-w-[300px]',
			'min-h-[300px]',
			'-translate-x-1/2',
			'-translate-y-1/2',
			'bg-white',
			'rounded-lg',
		);

		const modalContainerClassName = clsx();

		return (
			<div className={modalContainerClassName}>
				{isOpen && (
					<>
						<div
							className={backgroundStyle}
							data-testid="modal-background"
							onClick={handleBackgroundClick}
						></div>
						<div
							className={clsx(
								contentStyle,
								modalContentClassName,
							)}
							data-testid="modal-content"
						>
							{children}
						</div>
					</>
				)}
			</div>
		);
	},
);

Modal.displayName = 'Modal';

export default Modal;
