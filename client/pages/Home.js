import React from 'react'

import Test from '../components/test'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Test />
      </div>
    );
  }
}


