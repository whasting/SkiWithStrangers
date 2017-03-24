import { connect } from 'react-redux';
import ResortsIndex from './resorts_index';

import { receiveResorts, receiveResort } from '../../actions/resort_actions';
import { selectAllResorts, selectResort } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  resorts: state.resorts,
  resort: selectResort(state)
});};

const mapDispatchToProps = (dispatch) => ({
  receiveResorts: () => dispatch(receiveResorts()),
  receiveResort: resortId => dispatch(receiveResort(resortId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResortsIndex);
