import { connect } from 'react-redux';
import { createAttendance } from '../../actions/attendance_actions';
import AttendanceForm from './attendance_form';
import { receiveEvent } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  let detailEvent;
  if (Object.keys(state.event).length === 0) {
    detailEvent = ownProps.event;
  } else {
    detailEvent = state.event;
  }
  detailEvent = values(detailEvent)[0];
  let detailGuests = values(detailEvent.guests);
  return ({
  currentUser: state.session.currentUser,
  event: detailEvent,
  guests: detailGuests,
  attendances: state.attendances
});};

const mapDispatchToProps = (dispatch) => ({
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  receiveEvent: id => dispatch(receiveEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceForm);
