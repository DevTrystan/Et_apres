import React from 'react';
import Layout from '~/components/Layout/Layout';
import { Button } from '../../components/UI';

const ProfilePage: React.FC<any> = () => {
	return (
		<Layout>
			<div className="min-h-screen">
				<Button
					color="blue"
					rounded="full"
					onClick={() => console.log('Coudcou')}
				>
					Coucou
				</Button>
			</div>
		</Layout>
	);
};

export default ProfilePage;
