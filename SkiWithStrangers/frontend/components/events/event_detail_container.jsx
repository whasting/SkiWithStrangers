import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { receiveEvent,
         clearEvent,
         deleteEvent,
         updateEvent } from '../../actions/event_actions';
import { receiveAttendances } from '../../actions/attendance_actions';
import { selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

  return ({
    resortId: ownProps.resortId,
    userId: ownProps.userId,
    currentUser: state.session.currentUser,
    event: ownProps.event,
    resort: ownProps.resort,
    attendances: state.attendances,
    closeModal: ownProps.closeModal
});};

const mapDispatchToProps = dispatch => ({
  receiveEvent: id => dispatch(receiveEvent(id)),
  clearEvent: event => dispatch(clearEvent(event)),
  receiveAttendances: () => dispatch(receiveAttendances()),
  deleteEvent: id => dispatch(deleteEvent(id)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
