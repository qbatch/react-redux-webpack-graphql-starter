import React, { Component } from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import { profileAction, fetchProfileAction } from '../actions/ProfileActions';
import { connect } from 'react-redux';


import '../stylesheet/profile.less';

const FormItem = Form.Item;

class Profile extends Component {
  state = {
    id: 0
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchProfileAction());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        dispatch(profileAction(id, values))
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { profile } = this.props;

    let firstName;
    let lastName;
    let company;
    let department;
    let email;
    let position;

    const { fetched, fetching } = profile;
    // if (!fetched && fetching) {
    //   return null;
    // }

    if (profile && profile[0]) {
      ({ firstName, lastName, company, department, email, position } = profile[0]);
    }

    return (
      <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <h1>PROFILE</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('firstName', {
              initialValue: firstName,
              rules: [{ required: false, message: 'Please input your firstname!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="FirstName" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('lastName', {
              initialValue: lastName,
              rules: [{ required: false, message: 'Please input your lastName!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="LastName" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('company', {
              initialValue: company,
              rules: [{ required: false, message: 'Please input your company!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Company" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('department', {
              initialValue: department,
              rules: [{ required: false, message: 'Please input your department!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Department" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('position', {
              initialValue: position,
              rules: [{ required: false, message: 'Please input your position!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Position" />
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
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Save
            </Button>
          </FormItem>
        </Form>
      </Layout>
    );
  }
}

const ProfilePage = Form.create()(Profile);

export default connect(
  state => ({
    profile: state.profile
  })
)(ProfilePage)
