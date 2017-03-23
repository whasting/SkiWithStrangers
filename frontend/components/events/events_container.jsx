import { connect } from 'react-redux';
import Events from './events';

import { receiveEvents, receiveEvent } from '../../actions/event_actions';
import { selectEvents, selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  events: selectEvents(state),
  event: selectEvent(state),
  currentUser: state.session.currentUser,
  resort: ownProps.resort
});

const mapDispatchToProps = (dispatch) => ({
  receiveEvents: () => dispatch(receiveEvents()),
  receiveEvent: id => dispatch(receiveEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
