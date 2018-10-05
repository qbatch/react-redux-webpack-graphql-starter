import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../store';

// Containers
import MainContainer from '../containers/MainContainer.jsx';
import AuthContainer from '../containers/AuthContainer.jsx';

// Pages
import Home from '../pages/Home';
import Authentication from '../pages/Authentication.jsx';
import Profile from '../pages/Profile.jsx';

const renderRoutes = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={ props => <AppRoute Layout={MainContainer} Component={Home} props={props} /> } />
          <Route exact path="/signin" render={ props => <AppRoute Layout={AuthContainer} Component={Authentication} props={{...props, renderComponent: "signIn"}} /> } />
          <Route exact path="/signup" render={ props => <AppRoute Layout={AuthContainer} Component={Authentication} props={{...props, renderComponent: "signUp"}} /> } />
          <Route path="/profile/:id" render={ props => <AppRoute Layout={MainContainer} Component={Profile} props={props} /> } />
        </Switch>
      </ConnectedRouter>
    </Provider>
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
