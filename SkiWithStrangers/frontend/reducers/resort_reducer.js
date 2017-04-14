import { RECEIVE_RESORT,
         DELETE_RESORT,
         RECEIVE_ATTENDANCE,
         CLEAR_RESORT } from '../actions/resort_actions';
import merge from 'lodash/merge';

const ResortReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESORT:
      return merge({}, state, action.resort);
    case CLEAR_RESORT:
      return merge({}, state, action.resort);
    case DELETE_RESORT:
      newState = merge({}, state);
      delete newState[action.resort.id];
      return newState;
    default:
      return state;
  }
};

export default ResortReducer;
