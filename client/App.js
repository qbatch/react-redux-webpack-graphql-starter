import React from 'react';
import { hot } from 'react-hot-loader';
import RenderRoutes from './routes';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RenderRoutes/>
      </div>
    );
  }
}

export default hot(module)(App);
