import React, { Component } from 'react';

import AppHOC from '../hoc/AppHOC.jsx';

class AuthContainer extends Component {
  render() {
    return (
      <span>
        { React.cloneElement(this.props.children, {...this.props} )}
      </span>
    );
  }
}

export default AppHOC(AuthContainer);
