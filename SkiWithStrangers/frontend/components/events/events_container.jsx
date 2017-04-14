import { connect } from 'react-redux';
import Events from './events';

import { receiveEvents,
         receiveEvent,
         clearEvents } from '../../actions/event_actions';
import { receiveAttendances } from '../../actions/attendance_actions';
import { selectEvents,
         selectEvent,
         selectAttendances } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
  events: state.events,
  event: selectEvent(state),
  attendances:  selectAttendances(state),
  currentUser: state.session.currentUser,
  resortId: ownProps.resortId,
  resortName: ownProps.resortName,
  wait: ownProps.wait
});};

const mapDispatchToProps = (dispatch) => ({
  receiveEvents: resortId => dispatch(receiveEvents(resortId)),
  receiveEvent: id => dispatch(receiveEvent(id)),
  clearEvents: events => dispatch(clearEvents(events)),
  receiveAttendances: () => dispatch(receiveAttendances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
