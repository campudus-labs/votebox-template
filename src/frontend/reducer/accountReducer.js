import ActionTypes from '../actions/actionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isLoggedIn : false,
  isLoggingIn : false
});

const reducerMap = {
  [ActionTypes.TRY_LOGIN] : (state) => {
    return state.update('isLoggingIn', () => true);
  },
  [ActionTypes.SET_ACCOUNT] : (state, data) => (
    state.update('isLoggingIn', () => false).update('isLoggedIn', () => true).merge({
      username : data.username,
      id : data.id
    })
  )
};

export default {
  initialState,
  reducerMap
};
