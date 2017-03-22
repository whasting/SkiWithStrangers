import { connect } from 'react-redux';
import Events from './events';

import { receiveEvents, receiveEvent } from '../../actions/event_actions';
import { selectEvents, selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: selectEvents(state),
  event: selectEvent(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveEvents: () => dispatch(receiveEvents()),
  receiveEvent: id => dispatch(receiveEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
