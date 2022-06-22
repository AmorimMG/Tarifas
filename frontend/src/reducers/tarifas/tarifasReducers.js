import list from 'reducers/tarifas/tarifasListReducers';
import form from 'reducers/tarifas/tarifasFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
