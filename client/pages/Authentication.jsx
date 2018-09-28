import React, { Component } from 'react';
import { Layout } from 'antd';
import SignIn from './authentication/SignIn.jsx';

class Authentication extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <SignIn />
      </Layout>
    );
  }
}

export default Authentication;
