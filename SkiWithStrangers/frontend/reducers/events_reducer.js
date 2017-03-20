import { RECEIVE_EVENTS } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, state, action.events);
    default:
      return state;
  }
};

export default EventReducer;
