import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import { InputField  } from '../../components/InputField.jsx';
import '../../stylesheet/authentication.less';
const FormItem = Form.Item;

class SignIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
        <h1 style={{ textAlign: 'center'}}>Singin</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <InputField
            getFieldDecorator = {getFieldDecorator}
            name = {'userName'}
            required = {true}
            message = {'Please input your username!'}
            placeholderName = {'Username'}
            iconType = {'user'}
          />
          <InputField
            getFieldDecorator = {getFieldDecorator}
            name = {'password'}
            required = {true}
            message = {'Please input your Password!'}
            placeholderName = {'Password'}
            iconType = {'lock'}
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
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const SignInForm = Form.create()(SignIn);

export default SignInForm;