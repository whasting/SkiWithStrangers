import { connect } from 'react-redux';
import HostForm from './host_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    resort: ownProps.resort
  });
};

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);
