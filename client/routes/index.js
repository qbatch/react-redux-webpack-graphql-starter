import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Containers
import MainContainer from '../containers/MainContainer.jsx';
//pages
import Home from '../pages/Home';
import Authentication from '../pages/Authentication.jsx';

export const renderRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ props => <AppRoute Layout={MainContainer} Component={Home} props={props} /> } />
        <Route exact path="/signin" render={ props => <AppRoute Component={Authentication} props={props} /> } />
      </Switch>
    </Router>
  )
}

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  } else if (!Component) {
    return <Layout {...props} />;
  } else {
    return <Component {...props} />;
  }
};