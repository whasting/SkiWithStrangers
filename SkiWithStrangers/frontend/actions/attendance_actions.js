import * as APIUtil from '../util/attendance_api_util';

export const RECEIVE_ATTENDANCES = 'RECEIVE_ATTENDANCES';
export const RECEIVE_ATTENDANCE = 'RECEIVE_ATTENDANCE';
export const DELETE_ATTENDANCE = 'DELETE_ATTENDANCE';

//thunk
export const receiveAttendances = () => dispatch => (
  APIUtil.receiveAttendances()
    .then(attendances => dispatch(fetchAttendances(attendances)))
);

export const receiveAttendance = id => dispatch => (
  APIUtil.receiveAttendance(id)
    .then(attendance => dispatch(fetchAttendance(attendance)))
);

export const createAttendance = attendance => dispatch => (
  APIUtil.createAttendance(attendance)
    .then(newAttendance => dispatch(fetchAttendance(newAttendance)))
);

export const updateAttendance = attendance => dispatch => (
  APIUtil.updateAttendance(attendance)
    .then(updatedAttendance => dispatch(fetchAttendance(updatedAttendance)))
);

export const deleteAttendance = id => dispatch => (
  APIUtil.deleteAttendance(id)
    .then(attendance => dispatch(removeAttendance(attendance)))
);

//sync
const fetchAttendances = attendances => ({
  type: RECEIVE_ATTENDANCES,
  attendances
});

const fetchAttendance = attendance => ({
  type: RECEIVE_ATTENDANCE,
  attendance
});

const removeAttendance = attendance => ({
  type: DELETE_ATTENDANCE,
  attendance
});
