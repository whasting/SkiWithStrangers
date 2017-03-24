import { RECEIVE_EVENT,
         DELETE_EVENT,
         CLEAR_EVENT} from '../actions/event_actions';
import merge from 'lodash/merge';

const EventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EVENT:
      newState = merge({}, state, action.event);
      return newState;
    case DELETE_EVENT:
      newState = merge({}, state);
      delete newState[action.event.id];
      return newState;
    case CLEAR_EVENT:
      return action.event;
    default:
      return state;
  }
};

export default EventReducer;
