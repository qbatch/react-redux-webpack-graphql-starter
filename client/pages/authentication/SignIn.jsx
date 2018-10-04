import React, { Component } from 'react';
import { Form, Button, Checkbox, Card, Spin } from 'antd';
import { connect } from 'react-redux';

import { InputField  } from '../../components/InputField.jsx';
import { signInAction } from '../../actions/AuthenticationActions';
import '../../stylesheet/authentication.less';

const FormItem = Form.Item;

class SignIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        // Dispath Action
        const { dispatch } = this.props;
        dispatch(signInAction(values));
      }
    });
  }

  registorNowClicked = () => {
    console.log('registorNowClicked');
    this.props.history.push('/signup');
  }

  render() {
    console.log('signIn props', this.props);

    const { getFieldDecorator } = this.props.form;
    const { fetching, fetched, error } = this.props.user;

    // fetching true & fetched false => Loading
    if (fetching && !fetched) {
      return(
        <div>
          <Spin size="large" />
        </div>
      );
    }

    let errorMessage = ''
    if (error) {
      errorMessage = error.response.data.message;
    }

    return (
      <Card>
        <h1 style={{ textAlign: 'center'}}>SignIn</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <InputField
            getFieldDecorator = {getFieldDecorator}
            name = {'email'}
            rules = {[{
              required: true, message: 'Enter your E-mail!'
            }, {
              type: 'email', message: 'E-mail is Not Valid!'
            }]}
            iconType = {'mail'}
            type = {'text'}
            placeholder = {'E-mail'}
          />
          <InputField
            getFieldDecorator = {getFieldDecorator}
            name = {'password'}
            rules = {[{
              required: true, message: 'Enter your Password!'
            }]}
            iconType = {'lock'}
            type = {'password'}
            placeholder = {'Password'}
          />
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password ?</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="" onClick={this.registorNowClicked}>register now!</a>
          </FormItem>
          <FormItem
            getFieldDecorator = {getFieldDecorator}
            validateStatus="error"
            help={errorMessage}
          />
        </Form>
      </Card>
    );
  }
}

const SignInForm = Form.create()(SignIn);

export default connect(
  state => ({
    user: state.user
  })
)(SignInForm);
