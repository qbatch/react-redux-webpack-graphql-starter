import React, { Component } from 'react';
import { Form, Button, Input, Icon, Card, Spin } from 'antd';
import { connect } from 'react-redux';

import { InputField  } from '../../components/InputField.jsx';
import { signUpAction } from '../../actions/AuthenticationActions';
import '../../stylesheet/authentication.less';

const FormItem = Form.Item;

class SignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        // Dispath Action
        const { dispatch } = this.props;
        dispatch(signUpAction(values));
      }
    });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      form.validateFields(['confirmPassword'], { force: true });
    }

    if (value && value.length <= 7) {
      callback('Password Should be of More Than 7 Characters!');
    }
    callback();
  }

  render() {
    console.log('signUp props', this.props);

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
      if (error.response) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage = error;
      }
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Card>
        <h1 style={{ textAlign: 'center'}}>SignUp</h1>
        <Form onSubmit={this.handleSubmit}>
          <InputField
            getFieldDecorator = {getFieldDecorator}
            name = {'userName'}
            rules = {[{
              required: true, message: 'Enter your Username!'
            }]}
            iconType = {'user'}
            type = {'text'}
            placeholder = {'UserName'}
          />
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
            }, {
              validator: this.validateToNextPassword
            }]}
            iconType = {'lock'}
            type = {'password'}
            placeholder = {'Password'}
          />
          <InputField
            getFieldDecorator = {getFieldDecorator}
            name = {'confirmPassword'}
            rules = {[{
              required: true, message: 'Confirm your Password!'
            }, {
              validator: this.compareToFirstPassword
            }]}
            iconType = {'lock'}
            type = {'password'}
            placeholder = {'Confirm Password'}
          />
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
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

const SignUpForm = Form.create()(SignUp);

export default connect(
  state => ({
    user: state.user
  })
)(SignUpForm);
