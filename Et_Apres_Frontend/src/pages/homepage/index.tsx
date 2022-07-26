import React from 'react';
import Layout from '../../components/Layout/Layout';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<Layout>
			<div>
				<p>TodoHomePage</p>
			</div>
		</Layout>
	);
};

export default HomePage;
