import Immutable from 'immutable';
import ActionTypes from '../actions/actionTypes';

// TODO move out of index in smaller parts, create combineReducer for that
const initialState = Immutable.Map({
  greeting : '...'
});

const reducerMap = {
  [ActionTypes.SAY_HELLO] : (state, data) => state.update('greeting', () => `Hello ${data.name}`),
  [ActionTypes.SAY_WELCOME] : (state, data) => state.update('greeting', () => `Welcome ${data.name}`)
};

const reducer = (state = initialState, action) => {
  if (!action) {
    return state;
  }
  const actionFn = reducerMap[action.type];
  if (actionFn) {
    return actionFn(state, action);
  } else {
    return state;
  }
};

export default reducer;
