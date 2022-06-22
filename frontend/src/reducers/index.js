
import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import tarifas from 'reducers/tarifas/tarifasReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,

    users,

    tarifas,

  });

