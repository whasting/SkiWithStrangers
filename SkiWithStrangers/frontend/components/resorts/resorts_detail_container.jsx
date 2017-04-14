import { connect } from 'react-redux';
import ResortsDetail from './resorts_detail';

import { selectResort } from '../../reducers/selectors';
import { receiveResort, clearResort } from '../../actions/resort_actions';
import { clearEvents } from '../../actions/event_actions';

import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  return ({
  resortId: ownProps.resortId,
  resortLogo: ownProps.logo,
  resort: state.resort,
  currentUser: state.session.currentUser,
  events: state.events,
  wait: ownProps.wait
});};

const mapDispatchToProps = dispatch => ({
  receiveResort: id => dispatch(receiveResort(id)),
  clearEvents: events => dispatch(clearEvents(events)),
  clearResort: resort => dispatch(clearResort(resort))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResortsDetail);
