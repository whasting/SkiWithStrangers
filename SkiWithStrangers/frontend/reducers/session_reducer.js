import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      newState = merge({}, defaultState, {currentUser});
      return newState;
    case LOGOUT:
      return merge({}, state);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      newState = merge({}, defaultState, {errors});
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
