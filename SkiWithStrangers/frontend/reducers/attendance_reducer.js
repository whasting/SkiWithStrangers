import { RECEIVE_ATTENDANCE,
         DELETE_ATTENDANCE } from '../actions/attendance_actions';
import merge from 'lodash/merge';

const AttendanceReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ATTENDANCE:
      return merge({}, action.attendance);
    case DELETE_ATTENDANCE:
      newState = merge({}, state);
      delete newState[action.attendance.id];
      return {};
    default:
      return state;
  }
};

export default AttendanceReducer;
