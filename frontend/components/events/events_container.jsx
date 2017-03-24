import { connect } from 'react-redux';
import Events from './events';

import { receiveEvents, receiveEvent } from '../../actions/event_actions';
import { receiveAttendances } from '../../actions/attendance_actions';
import { selectEvents, selectEvent, selectAttendances } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
  events: state.events,
  event: selectEvent(state),
  attendances:  selectAttendances(state),
  currentUser: state.session.currentUser,
  resort: ownProps.resort
});};

const mapDispatchToProps = (dispatch) => ({
  receiveEvents: () => dispatch(receiveEvents()),
  receiveEvent: id => dispatch(receiveEvent(id)),
  receiveAttendances: () => dispatch(receiveAttendances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
