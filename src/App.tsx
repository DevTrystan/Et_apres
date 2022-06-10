import React from 'react';
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom';
import { ProfilPage } from './components/pages';

const Routes: React.FC<unknown> = () => {
  return (
    <div className="relative">
      <Switch>
        <Redirect exact from="/" to="/profile" />
        <Redirect exact from="*undefined*" to="/profile" />

        <Route path="/profile" component={ProfilPage} />
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
