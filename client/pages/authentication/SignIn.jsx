import React, { Component } from 'react';
import { Form, Button, Checkbox, Card, Spin } from 'antd';
import { connect } from 'react-redux';

import Auth from '../../modules/Auth';
import { InputField  } from '../../components/InputField.jsx';
import { signInAction } from '../../actions/AuthenticationActions';
import '../../stylesheet/authentication.less';

const FormItem = Form.Item;

class SignIn extends Component {
  state = {
    validationError: ''
  };

  componentWillMount() {
    console.log('SignIn componentWillMount() ', this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('SignIn componentWillReceiveProps() nextProps: ', nextProps);
    const { user } = nextProps;

    if(user) {
      if(user.data && user.data.token) {
        Auth.authenticateUser(user.data.token);

        if (Auth.isUserAuthenticated) {
          if (user.data.id) {
            this.props.history.push(`/profile/${user.data.id}`);
          }
        } else {
          console.log('User is not Authenticated!');
        }
      } else if (user.error){
        const validationError = user.error.response.data.message;

        this.setState({
          validationError
        });
      }
    }
  }

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
    this.props.history.push('/signup');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { fetching, fetched } = this.props.user;
    const { validationError } = this.state;

    // fetching true & fetched false => Loading
    if (fetching && !fetched) {
      return(
        <div>
          <Spin size="large" />
        </div>
      );
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
            Or <a onClick={this.registorNowClicked}>register now!</a>
          </FormItem>
          <FormItem
            getFieldDecorator = {getFieldDecorator}
            validateStatus="error"
            help={validationError}
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
