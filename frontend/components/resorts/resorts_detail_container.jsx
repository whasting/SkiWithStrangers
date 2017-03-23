import { connect } from 'react-redux';
import ResortsDetail from './resorts_detail';

import { selectResort } from '../../reducers/selectors';
import { receiveResort } from '../../actions/resort_actions';
import { receiveEvent } from '../../actions/event_actions';

import values from 'lodash/values';

const mapStateToProps = state => {
  
  return ({
  resort: selectResort(state),
  currentUser: state.session.currentUser
});};

const mapDispatchToProps = dispatch => ({
  receiveResort: id => dispatch(receiveResort(id)),
  receiveEvent: id => dispatch(receiveEvent(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResortsDetail);
