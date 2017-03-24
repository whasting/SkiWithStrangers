import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { receiveEvent, clearEvent } from '../../actions/event_actions';
import { receiveAttendances } from '../../actions/attendance_actions';
import { selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let passEvent;
  if (ownProps.event) {
    passEvent = ownProps.event;
  } else {
    passEvent = selectEvent(state);
  }

  return ({
  event: passEvent,
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