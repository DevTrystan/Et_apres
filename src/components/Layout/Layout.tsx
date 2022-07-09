import clsx from 'clsx';
import React from 'react';
import Navbar from './Navbar/Navbar';

export interface LayoutProps {
	children: React.ReactNode;
	className?: string;
	loginUrl?: string;
	registerUrl?: string;
}

export const NAVBAR_HEIGHT = 100;

const Layout: React.FC<LayoutProps> = ({
	loginUrl,
	registerUrl,
	className,
	children,
}) => {
	return (
		<>
			{/* meta */}
			<Navbar loginUrl={loginUrl} registerUrl={registerUrl} />
			<main className={clsx('pt-10', className)}>{children}</main>
			{/* Footer */}
			{/* Cookies */}
		</>
	);
};

export default Layout;
