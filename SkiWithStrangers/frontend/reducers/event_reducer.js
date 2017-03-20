import { RECEIVE_EVENT,
         DELETE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EVENT:
      newState = merge({}, state);
      newState[action.event.id] = action.event;
      return newState;
    case DELETE_EVENT:
      newState = merge({}, state);
      delete newState[action.event.id];
      return newState;
    default:
      return state;
  }
};
