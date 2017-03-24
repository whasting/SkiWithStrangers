import { connect } from 'react-redux';
import { createAttendance,
         receiveAttendances,
         deleteAttendance } from '../../actions/attendance_actions';
import AttendanceForm from './attendance_form';
import { receiveEvent } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  // TODO: don't nest single event under id in "event"
  let detailEvent = state.events[ownProps.event.id];
  let detailGuests = values(detailEvent.guests);

  let guestJoin = false;
  values(state.attendances).forEach(attendance => {
    if (attendance.user_id === state.session.currentUser.id &&
        attendance.event_id === detailEvent.id) {
      guestJoin = true;
    }
  });

  return ({
  currentUser: state.session.currentUser,
  event: detailEvent,
  guests: detailGuests,
  attendances: state.attendances,
  attendance: state.attendance,
  guestJoin: guestJoin
});};

const mapDispatchToProps = (dispatch) => ({
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  receiveAttendances: () => dispatch(receiveAttendances()),
  receiveEvent: id => dispatch(receiveEvent(id)),
  deleteAttendance: id => dispatch(deleteAttendance(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceForm);
