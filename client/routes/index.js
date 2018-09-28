import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../store';

// Containers
import MainContainer from '../containers/MainContainer.jsx';

// Pages
import Home from '../pages/Home';
import Authentication from '../pages/Authentication.jsx';
import Profile from '../pages/Profile.jsx';

const renderRoutes = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={ props => <AppRoute Layout={MainContainer} Component={Home} props={props} /> } />
          <Route exact path="/signin" render={ props => <AppRoute Component={Authentication} props={props} /> } />
          <Route exact path="/profile" render={ props => <AppRoute Layout={MainContainer} Component={Profile} props={props} /> } />
        </Switch>
      </Provider>
    </Router>
  );
};

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  }

  if (!Component) {
    return <Layout {...props} />;
  }

  return <Component {...props} />;
};

export default renderRoutes;
