import { connect } from 'react-redux';
import Events from './events';

import { receiveEvents, receiveEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  receiveEvents: () => dispatch(receiveEvents()),
  receiveEvent: id => dispatch(receiveEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
