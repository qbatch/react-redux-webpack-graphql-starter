import React, { Component } from 'react';
import { Form, Button, Input, Icon, Card, Spin } from 'antd';
import { connect } from 'react-redux';

import { signUpAction } from '../../actions/AuthenticationActions';
import '../../stylesheet/authentication.less';

const FormItem = Form.Item;

class SignUp extends Component {
  state = {
    confirmDirty: false
  }

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

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
    console.log(value);
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  }

  render() {
    console.log('signUp props', this.props);

    const { getFieldDecorator, getFieldsError } = this.props.form;
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
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{
                required: true, message: 'Enter your Username!',
              }],
            })(
              <Input prefix={<Icon type={'user'} style={{ color: 'rgba(0,0,0,.25)' }} />} type={'text'} placeholder={'UserName'}/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Enter your Email!',
              }],
            })(
              <Input prefix={<Icon type={'mail'} style={{ color: 'rgba(0,0,0,.25)' }} />} type={'text'} placeholder={'Email'}/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Enter your Password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input prefix={<Icon type={'lock'} style={{ color: 'rgba(0,0,0,.25)' }} />} type={'password'} placeholder={'Password'} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirmPassword', {
              rules: [{
                required: true, message: 'Confirm your Password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input prefix={<Icon type={'lock'} style={{ color: 'rgba(0,0,0,.25)' }} />} type={'password'} placeholder={'Confirm Password'} onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
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
