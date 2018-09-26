import React, { Component } from 'react';

class HomeLayout extends Component {
  render() {
    console.log(this.props, 'props');
    return (
      <div>
        <h1>home layout</h1>
        {this.props.children}
      </div>
    );
  }
}


export default HomeLayout;