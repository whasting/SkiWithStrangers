import { connect } from 'react-redux';
import { createAttendance } from '../../actions/attendance_actions';
import AttendanceForm from './attendance_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentEvent: state.resort.event
});

const mapDispatchToProps = dispatch => ({
  createAttendance: attendance => dispatch(createAttendance(attendance))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceForm);
