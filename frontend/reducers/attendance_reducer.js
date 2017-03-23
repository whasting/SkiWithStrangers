import { RECEIVE_ATTENDANCE,
         DELETE_ATTENDANCE } from '../actions/attendance_actions';
import merge from 'lodash/merge';

const AttendanceReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ATTENDANCE:
      newState = merge({}, state);
      newState[action.attendance.id] = action.attendance;
      return newState;
    case DELETE_ATTENDANCE:
      newState = merge({}, state);
      delete newState[action.attendance.id];
      return newState;
    default:
      return state;
  }
};

export default AttendanceReducer;
