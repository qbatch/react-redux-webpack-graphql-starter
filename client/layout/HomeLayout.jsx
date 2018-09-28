import React, { Component } from 'react';

class HomeLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


export default HomeLayout;