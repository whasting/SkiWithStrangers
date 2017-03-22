import * as APIUtil from '../util/attendance_api_util';

export const RECEIVE_ATTENDANCES = 'RECEIVE_ATTENDANCES';
export const RECEIVE_ATTENDANCE = 'RECEIVE_ATTENDANCE';
export const DELETE_ATTENDANCE = 'DELETE_ATTENDANCE';

//thunk
export const receiveAttendances = () => dispatch => (
  APIUtil.receiveAttendances()
    .then(attendances => dispatch(fetchAttendances(attendances)))
);

//sync
const fetchAttendances = attendances => ({
  type: RECEIVE_ATTENDANCES,
  attendances
});
