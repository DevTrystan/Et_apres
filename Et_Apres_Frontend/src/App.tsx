import React from 'react';
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom';
import { HomePage, OtherPage, ProfilPage } from './pages';

const Routes: React.FC<unknown> = () => {
	return (
		<div className="relative">
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Redirect exact from="*undefined*" to="/home" />

				<Route path="/home" component={HomePage} />
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
