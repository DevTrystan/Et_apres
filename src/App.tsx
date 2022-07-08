import React from 'react';
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom';
import { OtherPage, ProfilPage } from './pages';

const Routes: React.FC<unknown> = () => {
	return (
		<div className="relative">
			<Switch>
				<Redirect exact from="/" to="/profile" />
				<Redirect exact from="*undefined*" to="/me" />

				<Route path="/me" component={ProfilPage} />
				<Route path="/other" component={OtherPage} />
			</Switch>
		</div>
	);
};

const App: React.FC<unknown> = () => {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes />
		</BrowserRouter>
	);
};

export default App;
