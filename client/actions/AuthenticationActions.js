import axios from 'axios';
import querystring from 'querystring';

import GetUserById from '../graphql/queries/user/getUserById';

export function signInAction({ email, password }) {
  return (dispatch) => {
    dispatch({ type: 'SIGNIN_USER' });

    axios.post('http://localhost:4000/auth/login/', querystring.stringify({
      email,
      password
    })).then((response) => {
      dispatch({ type: 'SIGNIN_USER_FULFILLED', payload: { data: response.data } });
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
      dispatch({ type: 'SIGNUP_USER_FULFILLED', payload: { data: response.data } });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err });
    });
  };
}

export function fetchUserAction(client, id) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_USER' });

    client.query({
      query: GetUserById,
      variables: { id }
    }).then(({ data }) => dispatch({
      type: 'FETCH_USER_FULFILLED', payload: { data: data.getUserById }
    })).catch(e => dispatch({
      type: 'FETCH_USER_REJECTED', payload: e
    }));
  };
}

// client.mutate({
//   mutation: FetchUser,
//   variables: { id }
// }).then(({ data }) => {
//   if (data && data.fetchUser) {
//     if (data.fetchUser.status) {
//       dispatch({ type: 'FETCH_USER_FULFILLED', payload: data.fetchUser.data });
//     } else {
//       dispatch({ type: 'FETCH_USER_REJECTED', payload: data.fetchUser.msg });
//     }
//   } else {
//     dispatch({ type: 'FETCH_USER_REJECTED', payload: 'User Not Exists' });
//   }
// }).catch((e) => {
//   dispatch({ type: 'FETCH_USER_REJECTED', payload: e });
// });
