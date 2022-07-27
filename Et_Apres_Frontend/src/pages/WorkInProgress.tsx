import React from 'react';

import Layout from '~/components/Layout/Layout';

const WorkInProgress: React.FC<unknown> = () => {
	return (
		<Layout>
			<div>
				<img
					src="/public/img/website-work-in-progress.jpg"
					alt="Désolé, cette page est en cours de création, revenez bientôt"
				/>
			</div>
		</Layout>
	);
};

export default WorkInProgress;
