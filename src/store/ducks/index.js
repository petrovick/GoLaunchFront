import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';
import gamer from './gamer';
import businessman from './businessman';
import signup from './signup';

export default history => combineReducers({
  login,
  gamer,
  businessman,
  signup,
  router: connectRouter(history),
});
