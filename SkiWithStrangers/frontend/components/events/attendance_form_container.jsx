import { connect } from 'react-redux';
import { createAttendance } from '../../actions/attendance_actions';
import AttendanceForm from './attendance_form';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return ({
  currentUser: state.session.currentUser,
  currentEvent: ownProps.event
});};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAttendance: attendance => dispatch(createAttendance(attendance))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceForm);
