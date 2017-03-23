import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { receiveEvent, clearEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  event: ownProps.event,
  resort: ownProps.resort
});};

const mapDispatchToProps = dispatch => ({
  receiveEvent: id => dispatch(receiveEvent(id)),
  clearEvent: event => dispatch(clearEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
