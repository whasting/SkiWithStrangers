import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { receiveEvent, clearEvent } from '../../actions/event_actions';
import { receiveAttendances } from '../../actions/attendance_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  event: ownProps.event,
  resort: ownProps.resort,
  attendances: state.attendances
});};

const mapDispatchToProps = dispatch => ({
  receiveEvent: id => dispatch(receiveEvent(id)),
  clearEvent: event => dispatch(clearEvent(event)),
  receiveAttendances: () => dispatch(receiveAttendances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
