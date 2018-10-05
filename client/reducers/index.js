import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authenticationReducer from './AuthenticationReducer';

export default combineReducers({
  user: authenticationReducer,
  router: routerReducer
});
