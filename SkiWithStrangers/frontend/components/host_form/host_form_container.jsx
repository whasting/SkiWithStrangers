import { connect } from 'react-redux';
import { createEvent, receiveEvents } from '../../actions/event_actions';
import HostForm from './host_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    currentUser: state.session.currentUser,
    resortId: ownProps.resortId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createEvent: event => dispatch(createEvent(event)),
  receiveEvents: () => dispatch(receiveEvents()),
  closeModal: () => dispatch(ownProps.closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);
