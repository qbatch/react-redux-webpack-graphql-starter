import React, { Component } from 'react';
import { Form, Icon, Input, Button, Layout, Spin } from 'antd';
import { connect } from 'react-redux';

import { fetchUserAction } from '../actions/AuthenticationActions';
import '../stylesheet/profile.less';

const FormItem = Form.Item;

class Profile extends Component {
  state = {
    error: ''
  }

  componentWillMount() {
    console.log('Profile componentWillMount() ', this.props);

    const { dispatch, client, match } = this.props;
    dispatch(fetchUserAction(client, match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    console.log('Profile componentWillReceiveProps() nextProps: ', nextProps);
    const { user } = nextProps;

    if(user) {
      if(!user.data && user.error) {
        const error = user.error.response.data.message;

        this.setState({
          error
        });
      }
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { fetched, fetching, data } = this.props.user;
    const { error } = this.state;

    let userName;
    let email;

    // fetching true & fetched false => Loading
    if (fetching && !fetched) {
      return(
        <Spin size="large" />
      );
    }

    if (data) {
      ({ userName, email } = data);
    }

    return (
      <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <h1>PROFILE</h1>
        {data &&
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                initialValue: userName,
                rules: [{ required: false, message: 'Please input your UserName!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserName" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                initialValue: email,
                rules: [{ required: false, message: 'Please input your email!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type={'email'} placeholder="Email" />
              )}
            </FormItem>
          </Form>
        }

        {error &&
          <h2 style={{color: 'red'}}>{error}</h2>
        }
      </Layout>
    );
  }
}

const ProfilePage = Form.create()(Profile);

export default connect(
  state => ({
    user: state.user
  })
)(ProfilePage)
