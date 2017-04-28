import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { receiveEvents } from '../../actions/event_actions';
import { receiveAttendances } from '../../actions/attendance_actions';
import { selectEvents, selectAttendances } from '../../reducers/selectors';

const mapStateToProps = (state) => {

  return ({
    currentUser: state.session.currentUser,
    events: state.events,
    attendances: selectAttendances(state)
  });
};

const mapDispatchToProps = dispatch => ({
  receiveEvents: (resortId, userId) => (
    dispatch(receiveEvents(resortId, userId))
  ),
  receiveAttendances: id => dispatch(receiveAttendances(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
