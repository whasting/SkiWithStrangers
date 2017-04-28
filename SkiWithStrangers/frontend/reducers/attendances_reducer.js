import { RECEIVE_ATTENDANCES } from '../actions/attendance_actions';
import merge from 'lodash/merge';

const AttendancesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ATTENDANCES:
      return action.attendances;
    default:
      return state;
  }
};

export default AttendancesReducer;
