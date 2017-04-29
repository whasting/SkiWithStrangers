import { connect } from 'react-redux';
import { createEvent, receiveEvents } from '../../actions/event_actions';
import HostForm from './host_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    resortId: ownProps.resortId,
    userId: ownProps.userId,
    closeModal: ownProps.closeModal
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createEvent: event => dispatch(createEvent(event)),
  receiveEvents: (resortId, userId) => (
    dispatch(receiveEvents(resortId, userId))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);
