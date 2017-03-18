import { RECEIVE_RESORT,
         DELETE_RESORT } from '../actions/resort_actions';
import merge from 'lodash/merge';

const defaultState = {
  id: -1,
  name: "",
  description: "",
  address: "",
  resort_logo_url: ""
};

const ResortReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESORT:
      newState = merge({}, state);
      newState[action.resort.id] = action.resort;
      return newState;
    case DELETE_RESORT:
      newState = merge({}, state);
      delete newState[action.resort.id];
      return newState;
    default:
      return state;
  }
};

export default ResortReducer;
