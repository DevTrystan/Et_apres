import React from 'react';

import clsx from 'clsx';
import Layout from '../../components/Layout/Layout';

export interface OtherPageProps {
	className?: string;
}

const OtherPage: React.FC<OtherPageProps> = ({ className = '' }) => {
	return (
		<Layout>
			<div className={clsx('', className)}>
				<p>OtherPage</p>
			</div>
		</Layout>
	);
};

export default OtherPage;
