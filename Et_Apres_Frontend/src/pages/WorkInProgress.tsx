import React from 'react';

import clsx from 'clsx';

export interface WorkInProgressProps {
	className?: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({ className = '' }) => {
	return (
		<div className={clsx('', className)}>
			<img
				src="../website-work-in-progress.jpg"
				alt="Désolé, cette page est en cours de création, revenez bientôt"
			/>
		</div>
	);
};

export default WorkInProgress;
