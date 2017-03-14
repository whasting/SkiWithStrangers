import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, action.currentUser);
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state, action.errors);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
