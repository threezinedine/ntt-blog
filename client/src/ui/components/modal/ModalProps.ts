export interface ModalProps {
	children: React.ReactNode;
	modalContentClassName?: string;
	onClose?: () => void;
	onOpen?: () => void;
}

export interface ModalMethods {
	open: () => void;
	close: () => void;
}
