import React from 'react';
import { Button } from '../../components/ui';

const ProfilePage: React.FC<any> = () => {
	return (
		<>
			<div className="min-h-screen">
				<Button
					color="blue"
					rounded="full"
					onClick={() => console.log('Coucou')}
				>
					Coucou
				</Button>
			</div>
		</>
	);
};

export default ProfilePage;
