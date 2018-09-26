import React from 'react'

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'abc'
    }
  }

  render() {
    const { test } = this.state;
    return (<h1>Test Component{test}</h1>);
  }
}




