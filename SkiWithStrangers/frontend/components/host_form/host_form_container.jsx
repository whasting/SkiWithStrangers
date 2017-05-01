import { connect } from 'react-redux';
import { createEvent,
         receiveEvents,
         updateEvent } from '../../actions/event_actions';
import HostForm from './host_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    resortId: ownProps.resortId,
    userId: ownProps.userId,
    closeModal: ownProps.closeModal,
    event: ownProps.event,
    update: ownProps.update
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createEvent: event => dispatch(createEvent(event)),
  receiveEvents: (resortId, userId) => (
    dispatch(receiveEvents(resortId, userId))
  ),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);
