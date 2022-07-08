import clsx from 'clsx';
import React, { ReactElement } from 'react';
import Navbar from './Navbar/Navbar';

export interface LayoutProps {
	children: ReactElement | string | number;
	displayNavbar?: boolean;
	container?: boolean;
}

export const NAVBAR_HEIGHT = 100;

const Layout: React.FC<LayoutProps> = ({
	children,
	displayNavbar = true,
	container = true,
}) => {
	return (
		<>
			{displayNavbar && <Navbar />}
			<div style={{ paddingTop: displayNavbar ? NAVBAR_HEIGHT : 0 }}>
				<div
					className={clsx({
						'max-w-screen-xl mx-auto': container,
					})}
				>
					<div>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
