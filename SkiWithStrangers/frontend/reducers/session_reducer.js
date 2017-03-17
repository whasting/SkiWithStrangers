import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         CLEAR_ERRORS,
         LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let currentUser;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      newState = merge({}, defaultState, {currentUser});
      return newState;
    case LOGOUT:
      return merge({}, state);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      newState = merge({}, defaultState, {errors});
      return newState;
    case CLEAR_ERRORS:
      currentUser = action.currentUser;
      newState = merge({}, defaultState, {currentUser});
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
