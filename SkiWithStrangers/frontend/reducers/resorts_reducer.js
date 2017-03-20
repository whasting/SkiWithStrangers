import { RECEIVE_RESORTS } from '../actions/resort_actions';
import merge from 'lodash/merge';

const ResortsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESORTS:
      return merge({}, action.resorts);
    default:
      return state;
  }
};

export default ResortsReducer;
