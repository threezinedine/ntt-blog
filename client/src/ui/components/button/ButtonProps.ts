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

type ButtonSize = 'small' | 'medium' | 'large' | 'full';

type ButtonShape = 'rounded' | 'square' | 'pill';

export default interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	style?: ButtonStyle;
	size?: ButtonSize;
	shape?: ButtonShape;
}
