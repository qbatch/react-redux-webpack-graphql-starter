import React from 'react'
import { hot } from 'react-hot-loader'

import Home from './pages/Home'

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Home />
    );
  }
}

export default hot (module) (App);

