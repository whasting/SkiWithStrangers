import { RECEIVE_EVENTS, CLEAR_EVENTS } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case CLEAR_EVENTS:
      return merge({}, state, action.events);
    default:
      return state;
  }
};

export default EventReducer;
