import React from 'react'
import { hot } from 'react-hot-loader'
import { renderRoutes } from './routes';

import Home from './pages/Home'
import { Divider } from 'antd';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>{renderRoutes()}</div>
    );
  }
}

export default hot (module) (App);

