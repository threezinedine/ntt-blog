type ButtonStyle =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'success'
	| 'warning'
	| 'info'
	| 'dark'
	| 'link'
	| 'outline';

export default interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	style?: ButtonStyle;
}
