import { RECEIVE_RESORTS } from '../actions/resort_actions';
import merge from 'lodash/merge';

const ResortsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESORTS:
      newState = merge({}, action.resorts);
      return newState;
    default:
      return state;
  }
};

export default ResortsReducer;
