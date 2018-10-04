import React, { Component } from 'react';
import { Layout } from 'antd';

import SignIn from './authentication/SignIn.jsx';
import SignUp from './authentication/SignUp.jsx';

class Authentication extends Component {
  render() {
    const props = this.props;
    const { renderComponent } = props;

    return (
      <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        {renderComponent && renderComponent === 'signIn' &&
          <SignIn {...props}/>
        }
        {renderComponent && renderComponent === 'signUp' &&
          <SignUp {...props}/>
        }
      </Layout>
    );
  }
}

export default Authentication;
