import React, { ReactElement } from 'react';
import clsx from 'clsx';

const COLORS = {
	blue: {
		basic: 'text-white bg-blue-500 border-blue-500 hover:bg-blue-700',
		outlined: 'text-blue-500 bg-white hover:text-blue-700',
		link: 'text-blue-500 hover:underline hover:text-blue-700',
	},
	disabled: {
		basic: 'text-white bg-gray-300',
		outlined: 'text-gray-300 bg-white border-gray-300',
		link: 'text-gray-300 hover:underline',
	},
} as const;

type ButtonVariant = 'basic' | 'outlined' | 'link';
export type ButtonColor = keyof typeof COLORS;

interface ButtonProps {
	children: ReactElement | string | number;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	className?: string;
	variant?: ButtonVariant;
	color?: ButtonColor;
	rounded?: string;
	onClick?: (e: React.MouseEvent) => void;
	padding?: string;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	type = 'button',
	className = '',
	padding = 'px-4 py-2',
	rounded = '',
	variant = 'basic',
	onClick = () => {},
	color = 'blue',
	disabled = false,
}) => {
	const isNotLink = (['basic', 'outlined'] as ButtonVariant[]).includes(
		variant
	);

	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(
				'flex items-center focus:outline-none focus:ring-transparent transition-all relative overflow-hidden',
				{
					'border font-medium': isNotLink,
					'cursor-pointer': variant === 'link',
					[padding]: variant !== 'link',
					'cursor-not-allowed': disabled,
					'rounded-3xl': rounded === '3xl',
					'rounded-md': rounded === 'md',
					'rounded-none': rounded === 'none' || variant === 'link',
					'rounded-full': variant === 'basic' || variant === 'outlined',
				},
				COLORS[disabled ? 'disabled' : color][variant],
				className
			)}
		>
			{children}
		</button>
	);
};

export default Button;
