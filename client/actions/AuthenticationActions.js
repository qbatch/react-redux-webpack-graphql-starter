import axios from 'axios';
import querystring from 'querystring';

import LoginUser from '../graphql/mutations/user/login';

export function signInAction({ email, password }) {
  return (dispatch) => {
    dispatch({ type: 'SIGNIN_USER' });

    axios.post('http://localhost:4000/auth/login/', querystring.stringify({
      email,
      password
    })).then((response) => {
      dispatch({ type: 'SIGNIN_USER_FULFILLED', payload: response.data });
    }).catch((err) => {
      dispatch({ type: 'SIGNIN_USER_REJECTED', payload: err });
    });
  };
}

export function signUpAction({ userName, email, password }) {
  return (dispatch) => {
    dispatch({ type: 'SIGNUP_USER' });

    axios.post('http://localhost:4000/auth/signup/', querystring.stringify({
      userName,
      email,
      password
    })).then((response) => {
      dispatch({ type: 'SIGNUP_USER_FULFILLED', payload: response.data });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err });
    });
  };
}

export function fetchProfileAction(client, values) {
  return (dispatch) => {
    dispatch({ type: 'SIGN_IN' });

    client.mutate({
      mutation: LoginUser,
      variables: values
    }).then(({ data }) => {
      if (data && data.loginUser) {
        if (data.loginUser.status) {
          dispatch({ type: 'SIGN_IN_FULFILLED', payload: data.loginUser.data });
        }

        dispatch({ type: 'SIGN_IN_REJECTED', payload: data.loginUser.msg });
      } else {
        dispatch({ type: 'SIGN_IN_REJECTED', payload: 'No Response' });
      }
    }).catch((e) => {
      dispatch({ type: 'SIGN_IN_REJECTED', payload: e });
    });
  };
}
