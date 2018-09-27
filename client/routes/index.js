import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Containers
import MainContainer from '../container/MainContainer.jsx';
import HomeLayout from '../layout/HomeLayout.jsx';
//pages
import Home from '../pages/Home';
import Signin from '../pages/signin';
import Singup from '../pages/signup';

export const renderRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ props => <AppRoute Layout={MainContainer} Component={Home} props={props} /> } />
        <Route exact path="/signin" render={ props => <AppRoute Layout={HomeLayout} Component={Signin} props={props} /> } />
        <Route exact path="/signup" render={ props => <AppRoute Layout={HomeLayout} Component={Singup} props={props} /> } />
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