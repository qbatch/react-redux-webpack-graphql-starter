import { combineReducers } from 'redux';

import authenticationReducer from './AuthenticationReducer';

export default combineReducers({
  user: authenticationReducer,
  client: null
});
