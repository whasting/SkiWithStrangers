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
  let resortId = ownProps.resortId ? ownProps.resortId : -1;
  let userId = ownProps.userId ? ownProps.userId : -1;

  return ({
  events: state.events,
  event: selectEvent(state),
  attendances:  selectAttendances(state),
  currentUser: state.session.currentUser,
  resortId: resortId,
  userId: userId,
  resortName: ownProps.resortName,
  wait: ownProps.wait
});};

const mapDispatchToProps = (dispatch) => ({
  receiveEvents: (resortId, userId) => (
    dispatch(receiveEvents(resortId, userId))
  ),
  receiveEvent: id => dispatch(receiveEvent(id)),
  clearEvents: events => dispatch(clearEvents(events)),
  receiveAttendances: () => dispatch(receiveAttendances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
